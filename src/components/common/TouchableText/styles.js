import { StyleSheet } from 'react-native';

import { LIGHT_BLUE } from 'constants/styles';

export const stylesFunction = underline =>
  StyleSheet.create({
    text: {
      color: LIGHT_BLUE,
      textDecorationLine: underline ? 'underline' : null,
    },
  });
