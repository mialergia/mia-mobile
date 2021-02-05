import { StyleSheet } from 'react-native';

import {
  VERY_LIGHT_GREY,
  PLACEHOLDER_COLOR,
  LIGHT_BLUE,
  BLACK,
  INPUT_STYLE,
} from 'constants/styles';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 10,
  },
  input: {
    ...INPUT_STYLE,
    borderColor: VERY_LIGHT_GREY,
  },
  placeHolder: {
    color: PLACEHOLDER_COLOR,
  },
  icon: {
    position: 'absolute',
    right: 10,
    height: 25,
    width: 25,
  },
  confirmButton: {
    color: LIGHT_BLUE,
    fontWeight: 'bold',
  },
  text: {
    color: BLACK,
  },
  datePicker: {
    justifyContent: 'center',
  },
});

export default styles;
