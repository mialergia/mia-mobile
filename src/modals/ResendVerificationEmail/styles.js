import { StyleSheet } from 'react-native';

import { DARK_GREY, TOP_SHADOW, WHITE } from 'constants/styles';
import { PIXEL_HEIGHT } from 'constants/app';

const styles = StyleSheet.create({
  scrollview: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: WHITE,
    marginTop: PIXEL_HEIGHT * 0.6,
    borderRadius: 16,
    paddingTop: 30,
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    marginHorizontal: 5,
    ...TOP_SHADOW,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginLeft: 20,
    color: DARK_GREY,
  },
  closeButton: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
});

export default styles;
