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
  image: {
    width: 500,
    position: 'absolute',
    left: -100,
  },
  title: {
    fontSize: 24,
    marginBottom: 30,
    fontWeight: '700',
    marginLeft: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '500',
    marginBottom: 40,
  },
  mail: {
    fontWeight: '700',
  },
});

export default styles;
