import { StyleSheet } from 'react-native';
import { GREEN, LIGHT_GREY } from 'constants/styles';

const circleSize = 16;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  dot: {
    width: circleSize,
    height: circleSize,
    borderRadius: circleSize / 2,
    backgroundColor: LIGHT_GREY,
    marginRight: 15,
  },

  active: {
    backgroundColor: GREEN,
  },
});

export default styles;
