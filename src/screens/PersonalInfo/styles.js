import { StyleSheet } from 'react-native';

import { DARK_GREY, WHITE } from 'constants/styles';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: WHITE,
  },
  headerText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 22,
  },
  container: {
    flex: 1,
    backgroundColor: WHITE,
  },

  titleContainer: {
    paddingHorizontal: 24,
  },
  screenTitle: {
    fontSize: 24,
    color: DARK_GREY,
    fontWeight: '400',
    paddingBottom: 30,
    marginTop: 20,
    paddingHorizontal: 24,
  },
});

export default styles;
