import { combineReducers } from 'redux';
import { statusReducer } from '@rootstrap/redux-tools';

import session from 'reducers/sessionReducer';
import symptoms from 'reducers/symptomsReducer';
import pollens from 'reducers/pollensReducer';
import information from 'reducers/informationReducer';

const AppReducer = combineReducers({
  session,
  symptoms,
  pollens,
  information,
  actionStatus: statusReducer,
});

export default AppReducer;
