import types from './types';

const localStorageTokenKey = 'taskApp:sessionToken';
const localStorageUserEmail = 'taskApp:userEmail';

const initialState = {
  token: localStorage.getItem(localStorageTokenKey),
  user: null,
  rememberEmail: localStorage.getItem(localStorageUserEmail),
  isAuthenticated: false,
  isLoading: false,
  error: null,
  validateSession: true,
  forgotPassword: {
    email: null,
    emailWasSent: false,
  },
  recoverAccount: {
    passwordWasChanged: false,
  },
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.registerUser:
      localStorage.setItem(localStorageTokenKey, action.payload.token);

      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
        isAuthenticated: true,
      };

    case types.loginUser:
      localStorage.setItem(localStorageTokenKey, action.payload.token);

      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
        isAuthenticated: true,
      };

    case types.logOutUser:
      localStorage.removeItem(localStorageTokenKey);

      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false,
        error: null,
        validateSession: false,
        forgotPassword: {
          email: null,
          emailWasSent: false,
        },
        recoverAccount: {
          passwordWasChanged: false,
        },
      };

    case types.validateSession:
      return {
        ...state,
        validateSession: false,
      };

    case types.startLoader:
      return {
        ...state,
        isLoading: true,
      };

    case types.stopLoader:
      return {
        ...state,
        isLoading: false,
      };

    case types.setError:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
        isAuthenticated: false,
        token: null,
        user: null,
        validateSession: false,
        forgotPassword: {
          email: null,
          emailWasSent: false,
        },
        recoverAccount: {
          passwordWasChanged: false,
        },
      };

    case types.removeError:
      return {
        ...state,
        error: null,
      };

    case types.setRememberEmail:
      localStorage.setItem(localStorageUserEmail, action.payload);

      return {
        ...state,
        rememberEmail: action.payload,
      };

    case types.resetRememberEmail:
      localStorage.removeItem(localStorageUserEmail);

      return {
        ...state,
        rememberEmail: null,
      };

    case types.setForgotPasswordData:
      return {
        ...state,
        forgotPassword: {
          email: action.payload,
          emailWasSent: true,
        },
      };

    case types.resetForgotPasswordData:
      return {
        ...state,
        forgotPassword: {
          email: null,
          emailWasSent: false,
        },
      };

    case types.setRecoverAccount:
      return {
        ...state,
        recoverAccount: {
          passwordWasChanged: true,
        },
      };

    case types.resetRecoverAccount:
      return {
        ...state,
        recoverAccount: {
          passwordWasChanged: false,
        },
      };

    case types.setNewName:
      return {
        ...state,
        user: {
          ...state.user,
          name: action.payload.name,
        },
      };

    default:
      return state;
  }
};

export default authReducer;
