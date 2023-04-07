const Card = require('../models/card');
const { CodeSucces } = require('../statusCode');
const BadReqestError = require('../errors/BadReqestError');
const NotFoundError = require('../errors/NotFoundError');
const ForbiddenError = require('../errors/ForbiddenError');

const getCards = async (req, res, next) => {
  try {
    const cards = await Card.find({});
    return res.json(cards);
  } catch (e) {
    return next(e);
  }
};

const createCard = async (req, res, next) => {
  try {
    const owner = req.user._id;
    const { name, link } = req.body;

    const card = await Card.create({ name, link, owner });
    return res.status(CodeSucces.CREATED).json(card);
  } catch (e) {
    if (e.name === 'ValidationError') {
      return next(new BadReqestError('Переданы некорректные данные при создании карточки.'));
    }
    return next(e);
  }
};

const deleteCard = async (req, res, next) => {
  const { cardId } = req.params;
  const admin = req.user._id;
  try {
    const card = await Card.findById(cardId);

    if (card === null) {
      throw new NotFoundError(`Карточка ${cardId} не найдена.`);
    }

    const owner = card.owner.toHexString();

    if (owner !== admin) {
      throw new ForbiddenError('Можно удалять только свои карточки.');
    }

    await Card.findByIdAndRemove(cardId);
    return res.send({ message: `Карточка ${cardId} удалена.` });
  } catch (e) {
    if (e.name === 'CastError') {
      return next(new BadReqestError('Передан некорректный id карточки.'));
    }
    return next(e);
  }
};

const updateLike = async (req, res, method, next) => {
  try {
    const { cardId } = req.params;

    const card = await Card.findByIdAndUpdate(
      cardId,
      { [method]: { likes: req.user._id } },
      { new: true },
    );

    if (card === null) {
      throw new NotFoundError('Карточка по указанному id не найдена.');
    }

    return res.send({ likes: card.likes });
  } catch (e) {
    if (e.name === 'CastError') {
      return next(new BadReqestError('Передан некорректный id карточки.'));
    }
    return next(e);
  }
};

const likeCard = (req, res) => updateLike(req, res, '$addToSet');
const deleteLikeCard = (req, res) => updateLike(req, res, '$pull');

module.exports = {
  getCards,
  createCard,
  deleteCard,
  likeCard,
  deleteLikeCard,
};
