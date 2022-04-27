const setGetRequestForAuth = (token) => ({
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
});

const setPostRequestForAuth = (body) => ({
  method: 'POST',
  body: JSON.stringify(body),
  headers: {
    'Content-Type': 'application/json',
  },
});

const setPutRequestForAuth = (newPassword, token) => ({
  method: 'PUT',
  body: JSON.stringify(newPassword),
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
});

export { setGetRequestForAuth, setPostRequestForAuth, setPutRequestForAuth };
