const { CodeError } = require('../statusCode');
// 400
class BadReqestError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = CodeError.BAD_REQEST;
  }
}

module.exports = BadReqestError;
