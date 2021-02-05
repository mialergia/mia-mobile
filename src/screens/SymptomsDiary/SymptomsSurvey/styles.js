import { StyleSheet } from 'react-native';

import { DARK_GREY } from 'constants/styles';
import { PIXEL_WIDTH } from 'constants/app';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: PIXEL_WIDTH * 0.05,
  },
  titleContainer: {
    flex: 0.4,
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    color: DARK_GREY,
    fontWeight: '500',
    textAlign: 'center',
  },
  answersContainer: {
    flex: 1,
    alignItems: 'center',
  },
  progressDots: {
    marginBottom: 20,
  },
});

export default styles;
