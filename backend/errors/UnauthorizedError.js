const { CodeError } = require('../statusCode');
// 401
class UnauthorizedError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = CodeError.UNAUTHORIZED;
  }
}

module.exports = UnauthorizedError;
