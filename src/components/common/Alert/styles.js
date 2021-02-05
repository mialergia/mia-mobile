import { StyleSheet } from 'react-native';

import { SHADOW, WHITE } from 'constants/styles';
import { PIXEL_HEIGHT } from 'constants/app';

const styles = StyleSheet.create({
  container: {
    backgroundColor: WHITE,
    marginTop: PIXEL_HEIGHT * 0.3,
    marginHorizontal: 20,
    borderRadius: 16,
    ...SHADOW,
    shadowRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '500',
    marginBottom: 30,
  },
  rightIcon: {
    marginLeft: 10,
    marginRight: -40,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 10,
  },
});

export default styles;
