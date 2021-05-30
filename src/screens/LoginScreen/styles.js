import { StyleSheet } from 'react-native';

import { WHITE } from 'constants/styles';
import { PIXEL_HEIGHT } from 'constants/app';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    position: 'absolute',
  },

  scrollView: {
    flexGrow: 1,
  },

  appName: {
    color: WHITE,
    fontWeight: 'bold',
    fontSize: 27,
    paddingTop: '10%',
    textAlign: 'center',
  },

  welcome: {
    color: WHITE,
    fontSize: 27,
    textAlign: 'center',
  },

  headerImage: {
    width: '100%',
    height: '30%',
  },

  appIcon: {
    alignSelf: 'center',
    height: PIXEL_HEIGHT * 0.25,
  },

  buttonContainer: {
    height: 35,
    width: '50%',
  },
});

export default styles;
