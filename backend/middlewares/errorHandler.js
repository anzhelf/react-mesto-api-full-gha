const { CodeError } = require('../statusCode');

const errorHandler = (err, req, res, next) => {
  // если у ошибки нет статуса, выставляем 500
  const { statusCode = CodeError.SERVER_ERROR, message } = err;
  res.status(statusCode).send({
    message: statusCode === CodeError.SERVER_ERROR
      ? 'На сервере произошла ошибка'
      : message,
  });
  next();
};

module.exports = errorHandler;
