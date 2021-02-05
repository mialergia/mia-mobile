import { createReducer } from '@rootstrap/redux-tools';

import { getTermsConditions, getNotificationsList } from 'actions/informationActions';

const initialState = {
  termsConditions: null,
  notificationsList: [],
};

const handleGetTermsConditionsSuccess = (state, { payload }) => {
  state.termsConditions = payload.replace(/\\n/g, '\n');
};

const handleGetNotificationsListSuccess = (state, { payload }) => {
  state.notificationsList = payload;
};

export default createReducer(initialState, {
  [getTermsConditions.success]: handleGetTermsConditionsSuccess,
  [getNotificationsList.success]: handleGetNotificationsListSuccess,
});
