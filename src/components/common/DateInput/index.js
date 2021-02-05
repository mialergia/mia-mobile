import React from 'react';
import { string, func } from 'prop-types';
import DatePicker from 'react-native-datepicker';
import strings from 'locale';

import calendarIcon from 'images/calendar.png';
import { FRONTEND_DATE_FORMAT, todaysDate } from 'utils/dateHelpers';
import styles from './styles';

const DateInput = ({ inputName, date, handleValueChange, placeholder }) => {
  const onDateChange = date => {
    if (inputName) {
      handleValueChange(inputName, date);
    } else {
      handleValueChange(date);
    }
  };

  return (
    <DatePicker
      locale="es"
      style={styles.container}
      date={date}
      mode="date"
      androidMode="spinner"
      placeholder={placeholder || strings.PERSONAL_INFO.datePlaceholder}
      format={FRONTEND_DATE_FORMAT}
      confirmBtnText={strings.COMMON.confirm}
      cancelBtnText={strings.COMMON.cancel}
      iconSource={calendarIcon}
      customStyles={{
        dateIcon: styles.icon,
        dateInput: styles.input,
        placeholderText: styles.placeHolder,
        btnTextConfirm: styles.confirmButton,
        dateText: styles.text,
        datePicker: styles.datePicker,
      }}
      onDateChange={onDateChange}
      maxDate={todaysDate}
    />
  );
};

DateInput.propTypes = {
  inputName: string.isRequired,
  date: string,
  handleValueChange: func.isRequired,
  placeholder: string,
};

export default DateInput;
