import { StyleSheet } from 'react-native';

import { WHITE } from 'constants/styles';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: WHITE,
  },
  pollenContainer: warningMessage => ({
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: warningMessage ? 100 : 0,
  }),
  headerText: {
    flex: 1,
    textAlign: 'center',
    color: WHITE,
    fontSize: 20,
  },
  scrollView: warningMessage => ({
    flex: 1,
    paddingTop: warningMessage ? 100 : 0,
  }),
});

export default styles;
