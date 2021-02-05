import { StyleSheet } from 'react-native';

import { INPUT_STYLE, PLACEHOLDER_COLOR } from 'constants/styles';

export const placeholderTextColor = PLACEHOLDER_COLOR;

export const getStyles = secureTextEntry =>
  StyleSheet.create({
    inputContainer: INPUT_STYLE,
    input: {
      width: secureTextEntry ? '84%' : '100%',
    },
    passwordIcon: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 40,
      marginRight: 10,
    },
  });
