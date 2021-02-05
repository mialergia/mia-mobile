import { StyleSheet } from 'react-native';

import { DARK_GREY, WHITE } from 'constants/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
    paddingHorizontal: 24,
  },
  screenTitle: {
    fontSize: 24,
    color: DARK_GREY,
    fontWeight: '400',
    paddingBottom: 20,
    marginTop: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: '400',
    color: DARK_GREY,
    marginBottom: 30,
  },
  linkText: {
    fontSize: 18,
    fontWeight: '500',
  },
});

export default styles;
