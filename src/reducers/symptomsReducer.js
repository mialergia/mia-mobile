import { createReducer } from '@rootstrap/redux-tools';
import {
  getGenericQuestionsSuccess,
  getDiaryQuestions,
  getDiaryEntries,
  sendDiaryEntry,
} from 'actions/symptomsActions';

const initialState = {
  genericQuestions: null,
  diaryQuestions: [],
  diaryEntries: [],
  alert: null,
};

const handleGetGenericQuestionsSuccess = (state, { payload }) => {
  state.genericQuestions = payload;
};

const handleGetDiaryQuestionsSuccess = (state, { payload }) => {
  state.diaryQuestions = payload;
};

const handleGetDiaryEntries = (state, { payload }) => {
  state.diaryEntries = payload;
};

const handleSendDiaryEntrySuccess = (state, { payload }) => {
  state.alert = payload;
};

const handleSendDiaryEntryReset = state => {
  state.alert = null;
};

export default createReducer(initialState, {
  [getGenericQuestionsSuccess]: handleGetGenericQuestionsSuccess,
  [getDiaryQuestions.success]: handleGetDiaryQuestionsSuccess,
  [getDiaryEntries.success]: handleGetDiaryEntries,
  [sendDiaryEntry.success]: handleSendDiaryEntrySuccess,
  [sendDiaryEntry.reset]: handleSendDiaryEntryReset,
});
