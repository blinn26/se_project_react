const BASE_URL = 'http://localhost:3001';

const handleResponse = (res) => {
  if (!res.ok) {
    return res.json().then((error) => Promise.reject(error));
  }
  return res.json();
};

export function signUp(name, avatar, email, password) {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, avatar, email, password }),
  })
    .then(handleResponse)
    .catch((error) => console.log(error));
}

export function signIn(email, password) {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })
    .then(handleResponse)
    .catch((error) => console.log(error));
}

export function checkToken(token) {
  return fetch(`${BASE_URL}/user/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  })
    .then(handleResponse)
    .catch((error) => console.log(error));
}

const auth = { signIn, signUp, checkToken };
export default auth;
