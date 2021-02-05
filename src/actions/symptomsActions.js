import { createThunk } from '@rootstrap/redux-tools';
import symptomsService from 'services/symptomsService';

import parseError from 'utils/parseError';
import { groupByMonthYear } from 'utils/helpers';

export const getGenericQuestions = createThunk('GET_GENERIC_QUESTIONS', async () => {
  try {
    const { data } = await symptomsService.getGenericQuestions();
    return data;
  } catch (response) {
    throw parseError(response);
  }
});

export const sendSymptomsEvent = createThunk('SEND_SYMPTOMS_EVENT', async ({ sintomas }) => {
  try {
    const { data } = await symptomsService.sendSymptomsEvent({
      sintomas: Object.keys(sintomas),
    });
    return data;
  } catch (response) {
    throw parseError(response);
  }
});

export const getDiaryQuestions = createThunk('GET_DIARY_QUESTIONS', async () => {
  try {
    const { data } = await symptomsService.getDiaryQuestions();
    return data;
  } catch (response) {
    throw parseError(response);
  }
});

export const sendDiaryEntry = createThunk('SEND_DIARY_ENTRY', async entry => {
  try {
    const { data } = await symptomsService.sendDiaryEntry(entry);
    return data.alerta;
  } catch (response) {
    throw parseError(response);
  }
});

export const getDiaryEntries = createThunk('GET_DIARY_ENTRIES', async () => {
  try {
    const { data } = await symptomsService.getDiaryEntries();
    return groupByMonthYear(data);
  } catch (response) {
    throw parseError(response);
  }
});

export const { success: getGenericQuestionsSuccess } = getGenericQuestions;
export const { success: sendSymptomsEventSuccess } = sendSymptomsEvent;
