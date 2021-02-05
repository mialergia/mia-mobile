import React from 'react';
import { string, func } from 'prop-types';
import RNPickerSelect from 'react-native-picker-select';
import strings from 'locale';

import styles from './styles';

const GenericPicker = ({ inputName, items, placeholderLabel, handleValueChange, ...props }) => (
  <RNPickerSelect
    style={{
      viewContainer: styles.container,
      placeholder: styles.placeholder,
      modalViewMiddle: styles.modalHeader,
      modalViewBottom: styles.modal,
    }}
    onValueChange={value => handleValueChange(inputName, value)}
    placeholder={{ label: placeholderLabel, value: null }}
    doneText={strings.COMMON.confirm}
    items={items}
    {...props}
  />
);

GenericPicker.propTypes = {
  inputName: string.isRequired,
  handleValueChange: func.isRequired,
};

export default GenericPicker;
