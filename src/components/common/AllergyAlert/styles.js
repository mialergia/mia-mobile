import { StyleSheet } from 'react-native';

export const getStyles = borderColor =>
  StyleSheet.create({
    container: {
      marginVertical: 20,
      backgroundColor: borderColor,
      padding: 12,
    },
    icon: {
      alignSelf: 'center',
      marginBottom: 5,
    },
    alert: {
      textAlign: 'center',
      fontSize: 16,
      lineHeight: 19,
    },
  });
