import { BaseApi } from './BaseApi';

class Api extends BaseApi {
  constructor(config) {
    super(config);
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
  // url: 'http://localhost:3001',
  url: 'https://backend.anzhelf-mesto.nomoredomains.monster'',
  headers: {
  'Content-Type': 'application/json',
  authorization: `Bearer ${localStorage.getItem('token')}`
}
});
export { api };