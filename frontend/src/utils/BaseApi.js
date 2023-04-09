export class BaseApi {
  constructor(config) {
    this._config = config;
    this._url = config.url;
    this._headers = config.headers;
  }

  get _headerz() {
    return {
      ...this._headers,
      token: `Bearer ${localStorage.getItem('token')}`
    }
  }

  _checkResponse(res, err) {
    if (res.ok) {
      return res.json();
    }
    else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  }

  _request(url, options) {
    return fetch(url, options).then(this._checkResponse);
  }

  setToken(token) {
    this._headers.authorization = `Bearer ${token}`
  }
}