import { urlBase } from '../../api/urlBase';

import {
  setPostRequestForAuth,
  setGetRequestForAuth,
  setPutRequestForAuth,
} from '../../api/authConfig';

import {
  showQuestionAlert,
  showLoadAlert,
  showErrorAlert,
  showSuccessAlert,
  closeSwalAlert,
} from '../../helpers/alerts';

import {
  loginUserAction,
  logOutUserAction,
  registerUserAction,
  removeErrorAction,
  resetForgotPasswordDataAction,
  setErrorAction,
  setForgotPasswordDataAction,
  setRecoverAccountAction,
  startLoaderAction,
  stopLoaderAction,
  validateSessionAction,
} from './actions';
import { logOutClearTasksAction } from '../task/actions';

const registerUser = (user) => {
  const query = `${urlBase}/auth/register`;

  return async (dispatch, getState) => {
    dispatch(startLoaderAction());
    showLoadAlert();

    const response = await fetch(query, setPostRequestForAuth(user));
    const data = await response.json();

    if (!response.ok) {
      dispatch(stopLoaderAction());
      dispatch(setErrorAction(data.message));

      showErrorAlert(data.message);
      return;
    }

    dispatch(removeErrorAction());
    dispatch(registerUserAction(data));
    dispatch(stopLoaderAction());

    const { isLoading } = getState().auth;
    closeSwalAlert(isLoading);
  };
};

const loginUser = (user) => {
  const query = `${urlBase}/auth/login`;

  return async (dispatch, getState) => {
    dispatch(startLoaderAction());
    showLoadAlert();

    const response = await fetch(query, setPostRequestForAuth(user));
    const data = await response.json();

    if (!response.ok) {
      dispatch(stopLoaderAction());
      dispatch(setErrorAction(data.message));

      showErrorAlert(data.message);

      return;
    }

    dispatch(removeErrorAction());
    dispatch(loginUserAction(data));
    dispatch(stopLoaderAction());

    const { isLoading } = getState().auth;
    closeSwalAlert(isLoading);
  };
};

const logOutUser = () => {
  const logOutQuestion = {
    title: 'Cerrar Sesión',
    text: '¿Desea salir de su cuenta?',
    confirmButtonText: 'Salir',
  };

  return async (dispatch, getState) => {
    const result = await showQuestionAlert(logOutQuestion);

    if (!result.isConfirmed) {
      return;
    }

    dispatch(startLoaderAction());
    showLoadAlert('Cerrando sesión...');

    dispatch(logOutUserAction());
    dispatch(logOutClearTasksAction());
    dispatch(stopLoaderAction());

    const { isLoading } = getState().auth;
    closeSwalAlert(isLoading);
  };
};

const forgotMyPassword = (email) => {
  const query = `${urlBase}/auth/forgot-password`;

  return async (dispatch, getState) => {
    dispatch(resetForgotPasswordDataAction());
    dispatch(startLoaderAction());
    showLoadAlert('Enviando enlace...');

    const response = await fetch(query, setPostRequestForAuth(email));
    const data = await response.json();

    if (!response.ok) {
      dispatch(stopLoaderAction());
      dispatch(setErrorAction(data.message));

      showErrorAlert(data.message);

      return;
    }

    dispatch(removeErrorAction());
    dispatch(stopLoaderAction());
    dispatch(setForgotPasswordDataAction(email));

    const { isLoading } = getState().auth;
    closeSwalAlert(isLoading);

    showSuccessAlert('¡Enviado con éxito!');
  };
};

const changePassword = (newPassword, token) => {
  const query = `${urlBase}/users/${token}/change-password`;

  return async (dispatch, getState) => {
    dispatch(startLoaderAction());
    showLoadAlert('Cambiando contraseña...');

    const response = await fetch(
      query,
      setPutRequestForAuth(newPassword, token)
    );
    const data = await response.json();

    if (!response.ok) {
      dispatch(stopLoaderAction());
      dispatch(setErrorAction(data.message));

      showErrorAlert(data.message);

      return;
    }

    dispatch(removeErrorAction());
    dispatch(stopLoaderAction());
    dispatch(setRecoverAccountAction());

    const { isLoading } = getState().auth;
    closeSwalAlert(isLoading);

    showSuccessAlert('¡Cambiada con éxito!');
  };
};

const getAuthStatus = () => {
  const query = `${urlBase}/auth/renewToken`;

  return async (dispatch, getState) => {
    dispatch(startLoaderAction());

    const { token } = getState().auth;

    if (!token) {
      dispatch(validateSessionAction());
      dispatch(stopLoaderAction());

      return;
    }

    const response = await fetch(query, setGetRequestForAuth(token));
    const data = await response.json();

    if (!response.ok) {
      dispatch(stopLoaderAction());
      dispatch(validateSessionAction());

      return;
    }

    dispatch(loginUserAction(data));
    dispatch(stopLoaderAction());
    dispatch(validateSessionAction());
  };
};

export {
  registerUser,
  loginUser,
  logOutUser,
  forgotMyPassword,
  changePassword,
  getAuthStatus,
};
