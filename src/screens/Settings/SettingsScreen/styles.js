import { StyleSheet } from 'react-native';

import { BACKGROUND_COLOR, DARK_GREY } from 'constants/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
    paddingBottom: 20,
  },
  separator: {
    marginHorizontal: 0,
    marginVertical: 20,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 24,
  },
  rowTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
  titleScreen: {
    fontSize: 24,
    color: DARK_GREY,
    fontWeight: '400',
    marginBottom: 10,
    marginTop: 30,
    paddingHorizontal: 24,
  },
  logOutButton: {
    textAlign: 'center',
    fontSize: 18,
  },
});

export default styles;
