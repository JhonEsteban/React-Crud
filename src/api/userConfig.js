const setPutRequestForUser = (body, token) => ({
  method: 'PUT',
  body: JSON.stringify(body),
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
});

export { setPutRequestForUser };
