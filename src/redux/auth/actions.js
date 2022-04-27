import types from './types';

const registerUserAction = (data) => ({
  type: types.registerUser,
  payload: data,
});

const loginUserAction = (data) => ({
  type: types.loginUser,
  payload: data,
});

const logOutUserAction = () => ({
  type: types.logOutUser,
});

const validateSessionAction = () => ({
  type: types.validateSession,
});

const setErrorAction = (error) => ({
  type: types.setError,
  payload: error,
});

const removeErrorAction = () => ({
  type: types.removeError,
});

const startLoaderAction = () => ({
  type: types.startLoader,
});

const stopLoaderAction = () => ({
  type: types.stopLoader,
});

const setRememberEmailAction = (email) => ({
  type: types.setRememberEmail,
  payload: email,
});

const resetRememberEmailAction = () => ({
  type: types.resetRememberEmail,
});

const setForgotPasswordDataAction = ({ email }) => ({
  type: types.setForgotPasswordData,
  payload: email,
});

const resetForgotPasswordDataAction = () => ({
  type: types.resetForgotPasswordData,
});

const setRecoverAccountAction = () => ({
  type: types.setRecoverAccount,
});

const resetRecoverAccount = () => ({
  type: types.resetRecoverAccount,
});

export {
  registerUserAction,
  loginUserAction,
  logOutUserAction,
  validateSessionAction,
  setErrorAction,
  removeErrorAction,
  startLoaderAction,
  stopLoaderAction,
  setRememberEmailAction,
  resetRememberEmailAction,
  setForgotPasswordDataAction,
  resetForgotPasswordDataAction,
  setRecoverAccountAction,
  resetRecoverAccount,
};
