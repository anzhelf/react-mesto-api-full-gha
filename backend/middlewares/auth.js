const jwt = require('jsonwebtoken');
const UnauthorizedError = require('../errors/UnauthorizedError');

module.exports = (req, res, next) => {
  //const token = req.cookies.jwt;
  const { authorization } = req.headers;
  let payload;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    throw new UnauthorizedError('Необходима авторизация');
  }
  // извлечём токен
  const token = authorization.replace('Bearer ', '');

  try {
    payload = jwt.verify(token, 'some-secret-key');
  } catch (e) {
    next(new UnauthorizedError('Необходима авторизация.'));
    return;
  }

  req.user = payload; // записываем пейлоуд в объект запроса
  next();
};
