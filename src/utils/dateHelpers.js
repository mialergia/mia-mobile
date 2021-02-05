/* eslint-disable import/no-cycle */
import moment from 'moment';
import 'moment/locale/es';
import { capitalize } from 'lodash';

moment.locale('es');

export const FRONTEND_DATE_FORMAT = 'DD-MM-YYYY';
export const BACKEND_DATE_FORMAT = 'YYYY-MM-DD';

export const getLongFormattedDate = date => capitalize(moment(date).format('dddd, DD MMMM, YYYY'));
export const getDayMonthDate = date => moment(date).format('DD MMM');
export const getMonthYearDate = date => capitalize(moment(date).format('MMMM YYYY'));
export const todaysDate = moment().format(FRONTEND_DATE_FORMAT);

export const changeToBackendFormat = date =>
  moment(date, FRONTEND_DATE_FORMAT).format(BACKEND_DATE_FORMAT);

export const changeToFrontendFormat = date =>
  moment(date, BACKEND_DATE_FORMAT).format(FRONTEND_DATE_FORMAT);
