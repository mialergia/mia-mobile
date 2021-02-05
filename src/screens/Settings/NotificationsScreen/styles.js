import { StyleSheet } from 'react-native';

import { DARK_GREY, WHITE } from 'constants/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
    paddingHorizontal: 20,
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
    marginVertical: 15,
  },
  rowTitle: {
    flex: 1,
    marginRight: 15,
    color: DARK_GREY,
    fontSize: 15,
    fontWeight: '500',
  },
});

export default styles;
