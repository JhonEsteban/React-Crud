const setGetRequestForTask = (token) => ({
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
});

const setPostRequestForTask = (newTask, token) => ({
  method: 'POST',
  body: JSON.stringify(newTask),
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
});

const setPutRequestForTask = (newTask, token) => ({
  method: 'PUT',
  body: JSON.stringify(newTask),
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
});

const setDeleteRequestForTask = (token) => ({
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
});

export {
  setGetRequestForTask,
  setPostRequestForTask,
  setPutRequestForTask,
  setDeleteRequestForTask,
};
