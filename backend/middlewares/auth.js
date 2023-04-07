const jwt = require('jsonwebtoken');
const UnauthorizedError = require('../errors/UnauthorizedError');

module.exports = (req, res, next) => {
  let payload;

  try {
    const token = req.cookies.jwt;

    payload = jwt.verify(token, 'some-secret-key');
  } catch (e) {
    next(new UnauthorizedError('Необходима авторизация.dd'));
    return;
  }

  req.user = payload; // записываем пейлоуд в объект запроса
  next();
};
