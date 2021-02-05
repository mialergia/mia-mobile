import { createReducer } from '@rootstrap/redux-tools';
import strings from 'locale';

import {
  getReportsSuccess,
  getReportDetailsSuccess,
  getAllergiesSuccess,
  getPollenPdfsSuccess,
} from 'actions/pollenActions';
import { pollenLevels } from 'constants/data';
import { getAllergyAlerts, getLevelTex } from 'utils/helpers';

const initialState = {
  reports: null,
  reportDetails: null,
  allergies: null,
};

const handleGetReportsSuccess = (state, { payload }) => {
  if (payload?.alerta?.nivel !== pollenLevels.LOW && payload?.alerta?.alergias.length) {
    const { alerta, ...body } = payload;

    const warningMessage = strings.formatString(
      strings.POLLEN_CIRCLE.alert,
      getAllergyAlerts(alerta.alergias),
      alerta?.nivel,
      getLevelTex(alerta?.nivel),
    );
    payload = {
      ...body,
      alerta: {
        ...alerta,
        warningMessage,
      },
    };
  }
  state.reports = payload;
};

const handleGetReportDetailsSuccess = (state, { payload }) => {
  state.reportDetails = payload;
};

const handleGetAllergiesSuccess = (state, { payload }) => {
  state.allergies = payload;
};

const handleGetPollenPdfsSuccess = (state, { payload }) => {
  state.pollens = payload;
};

export default createReducer(initialState, {
  [getReportsSuccess]: handleGetReportsSuccess,
  [getReportDetailsSuccess]: handleGetReportDetailsSuccess,
  [getAllergiesSuccess]: handleGetAllergiesSuccess,
  [getPollenPdfsSuccess]: handleGetPollenPdfsSuccess,
});
