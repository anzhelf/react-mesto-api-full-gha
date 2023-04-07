class Api {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
  }

  _checkResponse(res) {
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

  getDataUser() {
    return this._request(`${this._url}/users/me`, {
      method: 'GET',
      headers: this._headers
    });
  }

  editAvatarUser(avatar) {
    return this._request(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar
      })
    });
  }

  editDataUser(name, about) {
    return this._request(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name,
        about
      })
    });
  }

  getInitialCards() {
    return this._request(`${this._url}/cards `, {
      method: 'GET',
      headers: this._headers
    });
  }

  addNewCard(name, link) {
    return this._request(`${this._url}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name,
        link
      })
    });
  }

  deleteLikeCard(id) {
    return this._request(`${this._url}/cards/${id}/likes`, {
      method: 'DELETE',
      headers: this._headers,
    });
  }

  likeCard(id) {
    return this._request(`${this._url}/cards/${id}/likes`, {
      method: 'PUT',
      headers: this._headers,
    });
  }

  deleteCard(id) {
    return this._request(`${this._url}/cards/${id}`, {
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
export default api;