import { StyleSheet } from 'react-native';
import { DARK_GREY, BOLD_GREY, WHITE, BACKGROUND_COLOR } from 'constants/styles';

export const getStyles = textColor =>
  StyleSheet.create({
    safearea: {
      flex: 1,
      backgroundColor: BACKGROUND_COLOR,
    },
    container: {
      paddingHorizontal: 35,
      paddingTop: 20,
      paddingBottom: 30,
    },
    headerText: {
      fontSize: 20,
      textAlign: 'center',
      color: textColor,
    },
    answerContainer: {
      justifyContent: 'space-around',
      backgroundColor: WHITE,
      borderLeftWidth: 3,
      borderRadius: 18,
      paddingVertical: 17,
      paddingHorizontal: 24,
      marginVertical: 7,
    },
    question: {
      fontSize: 18,
      fontWeight: '600',
      color: DARK_GREY,
    },
    answer: {
      fontSize: 18,
      color: BOLD_GREY,
      marginLeft: 3,
      marginTop: 10,
    },
    commentTitle: {
      fontSize: 20,
      fontWeight: '700',
      color: DARK_GREY,
      marginLeft: 5,
      marginTop: 20,
    },
    comment: {
      fontSize: 18,
      fontWeight: '500',
      color: DARK_GREY,
      marginTop: 10,
      marginLeft: 20,
    },
    coordinates: {
      marginTop: 5,
    },
  });
