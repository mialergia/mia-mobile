import { StyleSheet } from 'react-native';

import { DARK_GREY } from 'constants/styles';

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '400',
    color: DARK_GREY,
  },
});

export default styles;
