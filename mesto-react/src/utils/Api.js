class Api {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers;
  }

  _handleResponse = (res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  };

  getUserInfo() {
    return fetch(this._url + "/users/me", {
      headers: this._headers,
    }).then(this._handleResponse);
  }

  changeUserInfo(data) {
    return fetch(this._url + "/users/me", {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      }),
    }).then(this._handleResponse);
  }

  getInitialCards() {
    return fetch(this._url + "/cards", {
      headers: this._headers,
    }).then(this._handleResponse);
  }

  createNewCard(data) {
    return fetch(this._url + "/cards", {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      }),
    }).then(this._handleResponse);
  }

  changeUserAvatar(data) {
    return fetch(this._url + "/users/me/avatar", {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.avatar,
      }),
    }).then(this._handleResponse);
  }

  deleteCard(cardId) {
    return fetch(this._url + "/cards/" + cardId, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._handleResponse);
  }

  likeCard(cardId) {
    return fetch(this._url + `/cards/` + cardId + "/likes", {
      method: "PUT",
      headers: this._headers,
    }).then(this._handleResponse);
  }

  dislikeCard(cardId) {
    return fetch(this._url + `/cards/` + cardId + "/likes", {
      method: "DELETE",
      headers: this._headers,
    }).then(this._handleResponse);
  }

  changeLikeCardStatus(cardId, isLiked) {
    if (isLiked) {
      return fetch(this._url + `/cards/` + cardId + "/likes", {
        method: "DELETE",
        headers: this._headers,
      }).then(this._handleResponse);
    } else {
      return fetch(this._url + `/cards/` + cardId + "/likes", {
        method: "PUT",
        headers: this._headers,
      }).then(this._handleResponse);
    }
  }
}

export const api = new Api({
  url: "https://nomoreparties.co/v1/cohort-42",
  headers: {
    authorization: "5868c6c7-533b-43f4-8ab8-51cbbba53e88",
    "Content-Type": "application/json",
  },
});
