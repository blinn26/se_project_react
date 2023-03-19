const baseUrl = 'http://localhost:3001';

const Api = {
  _request: async (url, options = {}) => {
    const response = await fetch(url, options);
    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      throw new Error(`Error ${response.status}: ${data.message}`);
    }
  },

  getCards: async () => {
    return await Api._request(`${baseUrl}/items`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  },

  addCards: async ({ name, weather, imageUrl }) => {
    return await Api._request(`${baseUrl}/items`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        weather,
        imageUrl,
      }),
    });
  },

  deleteCards: async (id) => {
    return await Api._request(`${baseUrl}/items/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  },
};

export default Api;
