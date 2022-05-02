const types = {
  registerUser: '[AUTH] Register User',
  loginUser: '[AUTH] Login User',
  logOutUser: '[AUTH] Logout User',
  validateSession: '[AUTH] validate Auth Session ',
  setError: '[AUTH] Set Error',
  removeError: '[AUTH] Remove Error',
  startLoader: '[AUTH] Start Loader',
  stopLoader: '[AUTH] Stop Loader',
  setRememberEmail: '[AUTH] Set Remember Email',
  resetRememberEmail: '[AUTH] Reset Remember Email',
  setForgotPasswordData: '[AUTH] Set Forgot Password Data',
  resetForgotPasswordData: '[AUTH] Reset Forgot Password Data',
  setRecoverAccount: '[AUTH] Set Recover Account ',
  resetRecoverAccount: '[AUTH] Reset Recover Account',
  setNewUserName: '[AUTH] Set New User Name',
  setNewUserImage: '[AUTH] Set New User Image',
};

export default types;
