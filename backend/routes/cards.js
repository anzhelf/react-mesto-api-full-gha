const cards = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const {
  getCards, createCard, deleteCard, likeCard, deleteLikeCard,
} = require('../controllers/cards');
const { url } = require('../utils/regularExpressions');

cards.get('/', getCards); // возвращает все карточки

cards.post('/', celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    link: Joi.string().required().pattern(url),
  }),
}), createCard); // создаёт карточку

cards.delete('/:cardId', celebrate({
  body: Joi.object().keys({
    cardId: Joi.string().pattern(/[a-f0-9]{24,24}/).length(24),
  }),
}), deleteCard); // удаляет карточку по идентификатору

cards.put('/:cardId/likes', celebrate({
  body: Joi.object().keys({
    cardId: Joi.string().pattern(/[a-f0-9]{24,24}/).length(24),
  }),
}), likeCard);// поставить лайк карточке

cards.delete('/:cardId/likes', celebrate({
  body: Joi.object().keys({
    cardId: Joi.string().pattern(/[a-f0-9]{24,24}/).length(24),
  }),
}), deleteLikeCard);// убрать лайк с карточки

module.exports = cards;
