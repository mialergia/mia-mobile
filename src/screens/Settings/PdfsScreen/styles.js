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
    marginBottom: 30,
    marginTop: 20,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  pdfName: {
    flex: 1,
    marginRight: 12,
    color: DARK_GREY,
    fontSize: 17,
    fontWeight: '500',
    marginLeft: 20,
    textDecorationLine: 'underline',
  },
});

export default styles;
