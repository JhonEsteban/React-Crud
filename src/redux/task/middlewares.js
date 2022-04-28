import { urlBase } from '../../api/urlBase';
import { setQuestionForAlerts } from '../../helpers/setQuestionForAlerts';

import {
  setGetRequestForTask,
  setPostRequestForTask,
  setPutRequestForTask,
  setDeleteRequestForTask,
} from '../../api/taskConfig';

import {
  closeSwalAlert,
  showErrorAlert,
  showLoadAlert,
  showSuccessAlert,
} from '../../helpers/alerts';

import {
  createTaskQuestion,
  deleteAllTaskQuestion,
  deleteTaskQuestion,
  updateTaskQuestion,
} from '../../helpers/taskQuestions';

import {
  getAllTasksAction,
  startLoaderTaksAction,
  stopLoaderTaksAction,
  setCurrentTaskAction,
  startLoaderTaskFormAction,
  stopLoaderTaskFormAction,
  startTaskProcessLoaderAction,
  stopTaskProcessLoaderAction,
  setTaskErrorAction,
  resetTaskErrorAction,
  deleteAllTasksAction,
  createTaskAction,
  logOutClearTasksAction,
  updateTaskAction,
  deleteTaskAction,
} from './actions';

const getAllTasks = () => {
  const query = `${urlBase}/tasks`;

  return async (dispatch, getState) => {
    dispatch(startLoaderTaksAction());

    const { token } = getState().auth;

    const response = await fetch(query, setGetRequestForTask(token));
    const data = await response.json();

    if (!response.ok) {
      dispatch(stopLoaderTaksAction());
      dispatch(setTaskErrorAction(data.message));

      showErrorAlert(data.message);
      return;
    }

    dispatch(resetTaskErrorAction());

    const { tasks } = data;

    dispatch(getAllTasksAction(tasks));
    dispatch(stopLoaderTaksAction());
  };
};

const getTaskById = (taskId) => {
  const query = `${urlBase}/tasks/${taskId}`;

  return async (dispatch, getState) => {
    dispatch(startLoaderTaskFormAction());

    const { token } = getState().auth;

    const response = await fetch(query, setGetRequestForTask(token));
    const data = await response.json();

    if (!response.ok) {
      dispatch(stopLoaderTaskFormAction());
      dispatch(setTaskErrorAction(data.message));

      showErrorAlert(data.message);
      return;
    }

    dispatch(resetTaskErrorAction());

    const { task } = data;

    dispatch(setCurrentTaskAction(task));
    dispatch(stopLoaderTaskFormAction());
  };
};

const createTask = (newTask) => {
  const query = `${urlBase}/tasks`;

  return async (dispatch, getState) => {
    const result = await setQuestionForAlerts(createTaskQuestion);

    if (!result.isConfirmed) {
      return;
    }

    dispatch(startTaskProcessLoaderAction());
    showLoadAlert('Creando tarea...');

    const { token } = getState().auth;

    const response = await fetch(query, setPostRequestForTask(newTask, token));
    const data = await response.json();

    if (!response.ok) {
      dispatch(stopTaskProcessLoaderAction());
      dispatch(setTaskErrorAction(data.message));

      showErrorAlert(data.message);
      return;
    }

    dispatch(resetTaskErrorAction());
    dispatch(createTaskAction(data.task));
    dispatch(stopTaskProcessLoaderAction());

    const { isLoading } = getState().auth;
    closeSwalAlert(isLoading);

    showSuccessAlert(`¡${data.message}!`);
  };
};

const updateTask = (taskId, newTask) => {
  const query = `${urlBase}/tasks/${taskId}`;

  return async (dispatch, getState) => {
    const result = await setQuestionForAlerts(updateTaskQuestion);

    if (!result.isConfirmed) {
      return;
    }

    dispatch(startTaskProcessLoaderAction());
    showLoadAlert('Actualizando tarea...');

    const { token } = getState().auth;

    const response = await fetch(query, setPutRequestForTask(newTask, token));
    const data = await response.json();

    if (!response.ok) {
      dispatch(stopTaskProcessLoaderAction());
      dispatch(setTaskErrorAction(data.message));

      showErrorAlert(data.message);
      return;
    }

    dispatch(resetTaskErrorAction());
    dispatch(updateTaskAction(data.task));
    dispatch(stopTaskProcessLoaderAction());

    const { isLoading } = getState().auth;
    closeSwalAlert(isLoading);

    showSuccessAlert(`¡${data.message}!`);
  };
};

const deleteTask = (taskId) => {
  const query = `${urlBase}/tasks/${taskId}`;

  return async (dispatch, getState) => {
    const result = await setQuestionForAlerts(deleteTaskQuestion);

    if (!result.isConfirmed) {
      return;
    }

    dispatch(startTaskProcessLoaderAction());
    showLoadAlert('Eliminado tarea...');

    const { token } = getState().auth;

    const response = await fetch(query, setDeleteRequestForTask(token));
    const data = await response.json();

    if (!response.ok) {
      dispatch(stopTaskProcessLoaderAction());
      dispatch(setTaskErrorAction(data.message));

      showErrorAlert(data.message);
      return;
    }

    dispatch(resetTaskErrorAction());
    dispatch(deleteTaskAction(taskId));
    dispatch(stopTaskProcessLoaderAction());

    const { isLoading } = getState().auth;
    closeSwalAlert(isLoading);

    showSuccessAlert(`¡${data.message}!`);
  };
};

const deleteAllTasks = () => {
  const query = `${urlBase}/tasks`;

  return async (dispatch, getState) => {
    const result = await setQuestionForAlerts(deleteAllTaskQuestion);

    if (!result.isConfirmed) {
      return;
    }

    dispatch(startTaskProcessLoaderAction());
    showLoadAlert('Eliminado tareas...');

    const { token } = getState().auth;

    const response = await fetch(query, setDeleteRequestForTask(token));
    const data = await response.json();

    if (!response.ok) {
      dispatch(stopTaskProcessLoaderAction());
      dispatch(setTaskErrorAction(data.message));

      showErrorAlert(data.message);
      return;
    }

    dispatch(resetTaskErrorAction());
    dispatch(deleteAllTasksAction());
    dispatch(stopTaskProcessLoaderAction());

    const { isLoading } = getState().auth;
    closeSwalAlert(isLoading);

    showSuccessAlert(`¡${data.message}!`);
  };
};

const logOutClearTasks = () => {
  return (dispatch) => {
    dispatch(logOutClearTasksAction());
  };
};

export {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
  deleteAllTasks,
  logOutClearTasks,
};
