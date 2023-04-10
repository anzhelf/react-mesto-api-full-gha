const jwt = require('jsonwebtoken');
const { NODE_ENV, JWT_SECRET } = process.env;
const UnauthorizedError = require('../errors/UnauthorizedError');

module.exports = (req, res, next) => {
  // const token = req.cookies.jwt;
  const { authorization } = req.headers;
  let payload;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    next(new UnauthorizedError('Необходима авторизация.'));
    return;
  }
  // извлечём токен
  const token = authorization.replace('Bearer ', '');

  try {
    payload = jwt.verify(token, NODE_ENV === 'production' ? JWT_SECRET : 'some-secret-key');
  } catch (e) {
    next(new UnauthorizedError('Необходима авторизация.'));
    return;
  }

  req.user = payload; // записываем пейлоуд в объект запроса
  next();
};
