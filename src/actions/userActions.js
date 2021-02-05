import { createThunk, createAction } from '@rootstrap/redux-tools';

import userService from 'services/userService';
import parseError from 'utils/parseError';

export const login = createThunk('LOGIN', async user => {
  try {
    const { data } = await userService.login(user);
    return data.user;
  } catch (response) {
    throw parseError(response);
  }
});

export const logout = createThunk('LOGOUT', async () => {
  try {
    session = null; // eslint-disable-line
    user = null; // eslint-disable-line
    updateSession(session); // eslint-disable-line
    updateUser(user); // eslint-disable-line
  } catch (response) {
    throw parseError(response);
  }
});

export const signUp = createThunk('SIGNUP', async user => {
  try {
    const { data } = await userService.signUp({ ...user });
    return data.user;
  } catch (response) {
    throw parseError(response);
  }
});

export const updateUserInfo = createThunk('UPDATE_USER_INFO', async userInfo => {
  try {
    const { data } = await userService.updateUserInfo(userInfo);
    return data;
  } catch (response) {
    throw parseError(response);
  }
});

export const resetPassword = createThunk('RESET_PASWWORD', async email => {
  try {
    await userService.resetPassword(email);
  } catch (response) {
    throw parseError(response);
  }
});

export const updateSession = createAction('UPDATE_SESSION');
export const updateUser = createAction('UPDATE_USER');
export const setOneSignalId = createAction('SET_ONESIGNAL_ID');

export const { success: loginSuccess } = login;
export const { success: signUpSuccess } = signUp;
export const { success: logoutSuccess } = logout;
export const { success: updateUserInfoSuccess } = updateUserInfo;
