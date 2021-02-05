import { createReducer } from '@rootstrap/redux-tools';
import {
  loginSuccess,
  signUpSuccess,
  logoutSuccess,
  updateSession,
  updateUser,
  updateUserInfoSuccess,
  setOneSignalId,
} from 'actions/userActions';

const initialState = {
  user: null,
  info: null,
  onesignalPlayerId: null,
};

const handleLoginSuccess = (state, { payload }) => {
  state.user = payload;
};

const handleLogoutSuccess = () => {
  return initialState;
};

const handleUpdateSession = (state, { payload }) => {
  state.info = payload;
};

const handleUpdateUser = (state, { payload }) => {
  state.user = payload;
};

const handleUpdateUserInfoSuccess = (state, { payload }) => {
  state.user = payload;
};

const handleSetOneSignalId = (state, { payload }) => {
  state.onesignalPlayerId = payload;
};

export default createReducer(initialState, {
  [loginSuccess]: handleLoginSuccess,
  [logoutSuccess]: handleLogoutSuccess,
  [signUpSuccess]: handleLoginSuccess,
  [updateSession]: handleUpdateSession,
  [updateUser]: handleUpdateUser,
  [updateUserInfoSuccess]: handleUpdateUserInfoSuccess,
  [setOneSignalId]: handleSetOneSignalId,
});
