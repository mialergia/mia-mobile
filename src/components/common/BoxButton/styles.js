import { StyleSheet } from 'react-native';

import { WHITE, DARK_GREY, SHADOW } from 'constants/styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: WHITE,
    height: 60,
    width: 250,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 11,
    ...SHADOW,
  },
  text: {
    fontSize: 24,
    color: DARK_GREY,
    fontWeight: 'bold',
  },
});

export default styles;
