import types from './types';

const initialState = {
  tasks: [],
  isLoadingTasks: false,
  currentTask: null,
  isLoadingTaskForm: false,
  isLoadingTaskProcess: false,
  taskError: null,
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.getAllTasks:
      return {
        ...state,
        tasks: [...action.payload],
      };

    case types.createTask:
      return {
        ...state,
        tasks: [action.payload, ...state.tasks],
      };

    case types.updateTask:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? action.payload : task
        ),
      };

    case types.deleteTask:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };

    case types.deleteAllTasks:
      return {
        ...state,
        tasks: [],
      };

    case types.startLoaderTaks:
      return {
        ...state,
        isLoadingTasks: true,
      };

    case types.stopLoaderTasks:
      return {
        ...state,
        isLoadingTasks: false,
      };

    case types.setCurrentTask:
      return {
        ...state,
        currentTask: action.payload,
      };

    case types.resetCurrentTask:
      return {
        ...state,
        currentTask: null,
      };

    case types.startLoaderTaskForm:
      return {
        ...state,
        isLoadingTaskForm: true,
      };

    case types.stopLoaderTaskForm:
      return {
        ...state,
        isLoadingTaskForm: false,
      };

    case types.startTaskProcessLoader:
      return {
        ...state,
        isLoadingTaskProcess: true,
      };

    case types.stopTaskProcessLoader:
      return {
        ...state,
        isLoadingTaskProcess: false,
      };

    case types.logOutClearTasks:
      return {
        tasks: [],
        isLoadingTasks: false,
        currentTask: null,
        isLoadingTaskForm: false,
        isLoadingTaskProcess: false,
        taskError: null,
      };

    default:
      return state;
  }
};

export default taskReducer;
