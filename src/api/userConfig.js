const setPutRequestForUser = (body, token) => ({
  method: 'PUT',
  body: JSON.stringify(body),
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
});

const setPutRequestForUserImage = (body, token) => ({
  method: 'PUT',
  body,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export { setPutRequestForUser, setPutRequestForUserImage };
