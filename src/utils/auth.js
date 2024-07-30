const BASE_URL =
  process.env.NODE_ENV === 'production' ? 'https://seprojectreact.w3spaces.com' : 'http://localhost:3001';

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
  }).then(handleResponse);
}

export function signIn(email, password) {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  }).then(handleResponse);
}

export function checkToken(token) {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  }).then(handleResponse);
}

const auth = { signIn, signUp, checkToken };
export default auth;
