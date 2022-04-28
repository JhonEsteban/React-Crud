import types from './types';

const getAllTasksAction = (tasks) => ({
  type: types.getAllTasks,
  payload: tasks,
});

const createTaskAction = (newTask) => ({
  type: types.createTask,
  payload: newTask,
});

const updateTaskAction = (newTask) => ({
  type: types.updateTask,
  payload: newTask,
});

const deleteTaskAction = (taskId) => ({
  type: types.deleteTask,
  payload: taskId,
});

const deleteAllTasksAction = () => ({
  type: types.deleteAllTasks,
});

const startLoaderTaksAction = () => ({
  type: types.startLoaderTaks,
});

const stopLoaderTaksAction = () => ({
  type: types.stopLoaderTasks,
});

const setCurrentTaskAction = (task) => ({
  type: types.setCurrentTask,
  payload: task,
});

const resetCurrentTaskAction = () => ({
  type: types.resetCurrentTask,
});

const setTaskErrorAction = (error) => ({
  type: types.setTaskError,
  payload: error,
});

const resetTaskErrorAction = () => ({
  type: types.resetTaskError,
});

const startLoaderTaskFormAction = () => ({
  type: types.startLoaderTaskForm,
});

const stopLoaderTaskFormAction = () => ({
  type: types.stopLoaderTaskForm,
});

const startTaskProcessLoaderAction = () => ({
  type: types.startTaskProcessLoader,
});

const stopTaskProcessLoaderAction = () => ({
  type: types.stopTaskProcessLoader,
});

const logOutClearTasksAction = () => ({
  type: types.logOutClearTasks,
});

export {
  getAllTasksAction,
  createTaskAction,
  updateTaskAction,
  deleteTaskAction,
  deleteAllTasksAction,
  startLoaderTaksAction,
  stopLoaderTaksAction,
  setCurrentTaskAction,
  resetCurrentTaskAction,
  setTaskErrorAction,
  resetTaskErrorAction,
  startLoaderTaskFormAction,
  stopLoaderTaskFormAction,
  startTaskProcessLoaderAction,
  stopTaskProcessLoaderAction,
  logOutClearTasksAction,
};
