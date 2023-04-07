import { BaseApi } from './BaseApi';

class Api extends BaseApi {
  constructor(config) {
    super(config);
    this._url = config.url;
    this._headers = config.headers;
  }

  getDataUser() {
    return super._request(`${this._url}/users/me`, {
      method: 'GET',
      headers: this._headers
    });
  }

  editAvatarUser(avatar) {
    return super._request(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar
      })
    });
  }

  editDataUser(name, about) {
    return super._request(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name,
        about
      })
    });
  }

  getInitialCards() {
    return super._request(`${this._url}/cards `, {
      method: 'GET',
      headers: this._headers
    });
  }

  addNewCard(name, link) {
    return super._request(`${this._url}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name,
        link
      })
    });
  }

  deleteLikeCard(id) {
    return super._request(`${this._url}/cards/${id}/likes`, {
      method: 'DELETE',
      headers: this._headers,
    });
  }

  likeCard(id) {
    return super._request(`${this._url}/cards/${id}/likes`, {
      method: 'PUT',
      headers: this._headers,
    });
  }

  deleteCard(id) {
    return super._request(`${this._url}/cards/${id}`, {
      method: 'DELETE',
      headers: this._headers,
    });
  }
}

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-50',
  headers: {
    'Content-Type': 'application/json',
    authorization: '653fc287-1617-4fdf-ab2c-e8fd91183c7f'
  }
});
export { api };