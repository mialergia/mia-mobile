import { StyleSheet } from 'react-native';
import { DARK_GREY, BOLD_GREY, WHITE } from 'constants/styles';

export const getStyles = () =>
  StyleSheet.create({
    container: {
      paddingHorizontal: 35,
      paddingTop: 20,
      paddingBottom: 30,
    },
    headerText: {
      flex: 1,
      fontSize: 22,
      textAlign: 'center',
      color: WHITE,
      fontWeight: '700',
    },
    answerContainer: {
      flex: 1,
      justifyContent: 'space-around',
      backgroundColor: WHITE,
      borderLeftWidth: 25,
      borderRadius: 18,
      paddingVertical: 15,
      paddingHorizontal: 24,
      marginVertical: 7,
      marginRight: 20,
    },
    question: {
      fontSize: 21,
      fontWeight: '700',
      color: DARK_GREY,
      marginRight: 10,
    },
    answer: {
      fontSize: 20,
      color: BOLD_GREY,
      marginLeft: 3,
      marginTop: 10,
      fontWeight: '600',
    },
    pdfContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      alignContent: 'flex-end',
    },
    pdfIcon: {
      height: 20,
      width: 20,
      marginRight: 4,
    },
    pdfTitle: {
      fontSize: 16,
      textDecorationLine: 'underline',
    },
  });
