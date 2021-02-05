import { StyleSheet } from 'react-native';

import { TOP_SHADOW, WHITE } from 'constants/styles';

const styles = StyleSheet.create({
  background: {
    flexGrow: 1,
    marginTop: 40,
    justifyContent: 'flex-end',
  },
  popUp: {
    ...TOP_SHADOW,
    backgroundColor: WHITE,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    shadowRadius: 12,
  },
});

export default styles;
