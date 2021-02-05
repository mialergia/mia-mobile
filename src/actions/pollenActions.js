import { createThunk } from '@rootstrap/redux-tools';
import pollenService from 'services/pollenService';

import parseError from 'utils/parseError';

export const getReports = createThunk('GET_REPORTS', async () => {
  try {
    const { data } = await pollenService.getReports();
    return data && data.length ? data[0] : {};
  } catch (response) {
    throw parseError(response);
  }
});

export const getReportDetails = createThunk('GET_REPORT_DETAIL', async groupId => {
  try {
    const { data } = await pollenService.getPollenDetails(groupId);
    return data && data.length ? data[0] : {};
  } catch (response) {
    throw parseError(response);
  }
});

export const getAllergies = createThunk('GET_ALLERGIES', async () => {
  try {
    const { data } = await pollenService.getAllergies();
    return data;
  } catch (response) {
    throw parseError(response);
  }
});

export const getPollenPdfs = createThunk('GET_POLLEN_PDFS', async groupId => {
  try {
    const { data } = await pollenService.getPollenPdfs(groupId);
    return data || [];
  } catch (response) {
    throw parseError(response);
  }
});

export const { success: getReportsSuccess } = getReports;
export const { success: getReportDetailsSuccess } = getReportDetails;
export const { success: getAllergiesSuccess } = getAllergies;
export const { success: getPollenPdfsSuccess } = getPollenPdfs;
