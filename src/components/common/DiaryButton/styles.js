import { StyleSheet } from 'react-native';
import { DARK_GREY, BOLD_GREY } from 'constants/styles';

export const getStyles = borderColor =>
  StyleSheet.create({
    buttonContainer: {
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      height: 85,
      width: '100%',
      marginBottom: 20,
    },
    container: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    dateContainer: {
      marginHorizontal: 10,
    },
    border: {
      backgroundColor: borderColor,
      width: 12,
      height: '100%',
      borderTopLeftRadius: 11,
      borderBottomLeftRadius: 11,
    },
    title: {
      marginLeft: 10,
      fontSize: 20,
      fontWeight: '500',
      color: DARK_GREY,
    },
    separator: {
      height: '80%',
    },
    commentContainer: {
      flex: 1,
      marginLeft: 10,
    },
    commentTitle: {
      fontSize: 20,
      fontWeight: '500',
      color: DARK_GREY,
      marginBottom: 5,
    },
    comment: {
      overflow: 'scroll',
      color: BOLD_GREY,
    },
  });
