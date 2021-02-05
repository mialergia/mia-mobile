import { createThunk } from '@rootstrap/redux-tools';

import informationService from 'services/informationService';
import parseError from 'utils/parseError';

export const getTermsConditions = createThunk('GET_TERMS_CONDITIONS', async () => {
  try {
    const { data } = await informationService.getTermsConditions();
    return data[0]?.texto;
  } catch (response) {
    throw parseError(response);
  }
});

export const getNotificationsList = createThunk('GET_NOTIFICATIONS_LIST', async () => {
  try {
    const { data } = await informationService.getNotificationsList();
    return data;
  } catch (response) {
    throw parseError(response);
  }
});
