import { StyleSheet } from 'react-native';

import { DARK_GREY } from 'constants/styles';

const styles = StyleSheet.create({
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
