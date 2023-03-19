const baseUrl = 'https://my-json-server.typicode.com/blinn26/se_project_react';

const Api = {
  request: async (url, options = {}) => {
    const response = await fetch(url, options);
    if (response.ok) {
      return await response.json();
    }
    const error = new Error(`Error ${response.status}: ${await response.text()}`);
    throw error;
  },

  getCards: async () => {
    const url = `${baseUrl}/items`;
    const options = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    return await Api.request(url, options);
  },

  addCard: async ({ name, imageUrl, weather }) => {
    const url = `${baseUrl}/items`;
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, imageUrl, weather }),
    };
    return await Api.request(url, options);
  },

  deleteCard: async (id) => {
    const url = `${baseUrl}/items/${id}`;
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    return await Api.request(url, options);
  },
};

export default Api;

/* https://my-json-server.typicode.com/blinn26/se_project_react */
