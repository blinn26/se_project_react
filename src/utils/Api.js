const BASE_URL = process.env.NODE_ENV === 'production' ? 'https://wtwr.crabdance.com/api' : 'http://localhost:3001';

const Api = {
  request: async (url, options = {}) => {
    const response = await fetch(url, options);
    if (response.ok) {
      return await response.json();
    }
    const error = new Error(`Error ${response.status}: ${await response.text()}`);
    throw error;
  },

  getCards: async (token) => {
    const url = `${BASE_URL}/items`;

    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
    return await Api.request(url, options);
  },

  addCard: async ({ name, imageUrl, weather }) => {
    const token = localStorage.getItem('token');
    const url = `${BASE_URL}/items`;
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ name, imageUrl, weather }),
    };
    return await Api.request(url, options);
  },

  deleteCard: async (_id, token) => {
    const url = `${BASE_URL}/items/${_id}`;
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
    return await Api.request(url, options);
  },
  addCardLike: async (_id, token) => {
    const url = `${BASE_URL}/items/${_id}/likes`;
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
    return await Api.request(url, options);
  },
  updateUserInfo: async (name, avatar, token) => {
    const url = `${BASE_URL}/users/me`;
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ name, avatar }),
    };
    return await Api.request(url, options);
  },

  removeCardLike: async (_id, token) => {
    const url = `${BASE_URL}/items/${_id}/likes`;
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
    return await Api.request(url, options);
  },
};

export default Api;
