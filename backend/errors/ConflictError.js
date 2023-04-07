const { CodeError } = require('../statusCode');
// 409
class ConflictError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = CodeError.CONFLICT;
  }
}

module.exports = ConflictError;
