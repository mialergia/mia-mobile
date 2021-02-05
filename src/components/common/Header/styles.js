import { StyleSheet } from 'react-native';
import { WHITE } from 'constants/styles';

export const getStyles = (backgroundColor, backButton) =>
  StyleSheet.create({
    safeArea: {
      backgroundColor,
      borderBottomLeftRadius: 60,
      borderBottomRightRadius: 60,
    },

    container: {
      flexDirection: 'row',
      marginTop: backButton ? 10 : 30,
      marginHorizontal: 30,
      justifyContent: 'center',
      alignItems: 'flex-end',
      paddingBottom: 20,
    },

    title: {
      fontSize: 23,
      fontWeight: 'bold',
      color: WHITE,
      marginLeft: 20,
      textAlign: 'center',
    },

    backButton: {
      marginHorizontal: 10,
    },
  });
