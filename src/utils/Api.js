const BASE_URL = 'http://localhost:3001';
/* const BASE_URL = 'https://my-json-server.typicode.com/blinn26/se_project_react'; */

const Api = {
  request: async (url, options = {}) => {
    const response = await fetch(url, options);
    console.log(options);
    if (response.ok) {
      return await response.json();
    }
    const error = new Error(`Error ${response.status}: ${await response.text()}`);
    throw error;
  },

  getCards: async () => {
    const url = `${BASE_URL}/items`;

    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    return await Api.request(url, options);
  },

  addCard: async ({ name, imageUrl, weather }) => {
    const url = `${BASE_URL}/items`;
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
    const url = `${BASE_URL}/items/${id}`;
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
