import { BaseApi } from './BaseApi';

class Auth extends BaseApi {
  constructor(config) {
    super(config);
    this._url = config.url;
    this._headers = config.headers;
    // this._headers.authorization = config.headers.authorization;
  }

  register(email, password) {
    return super._request(`${this._url}/sign-up`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        email,
        password
      })
    });
  }

  authorize(email, password) {
    return super._request(`${this._url}/sign-in`, {
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

  setToken(token) {
    this._headers = {
      authorization: `Bearer ${token}`
    }
  }
}

const auth = new Auth({
  url: 'http://localhost:3001',
  headers: {
    'Content-Type': 'application/json',
    authorization: `Bearer ${localStorage.getItem('token')}`
  }
});
export { auth };