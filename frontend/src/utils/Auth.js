import { BaseApi } from './BaseApi';

class Auth extends BaseApi {
  constructor(config) {
    super(config);
    this._url = config.url;
    this._headers = config.headers;
  }

  register(email, password) {
    return super._request(`${this._url}/signup`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        email,
        password
      })
    });
  }

  authorize(email, password) {
    return super._request(`${this._url}/signin`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        email,
        password
      })
    });
  }

  checkToken() {
    return super._request(`${this._url}/users/me`, {
      method: 'GET',
      headers: this._headers
    });
  }
}

const auth = new Auth({
  url: 'https://auth.nomoreparties.co',
  headers: {
    'Content-Type': 'application/json',
    authorization: `Bearer ${localStorage.getItem('token')}`
  }
});
export { auth };