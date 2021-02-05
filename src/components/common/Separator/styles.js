import { StyleSheet } from 'react-native';
import { LIGHT_GREY } from 'constants/styles';

export const getStyles = vertical =>
  StyleSheet.create({
    separator: {
      alignSelf: 'center',
      backgroundColor: LIGHT_GREY,
      height: vertical ? '100%' : 1,
      marginHorizontal: vertical ? 10 : 50,
      width: vertical ? 2 : '100%',
    },
  });
