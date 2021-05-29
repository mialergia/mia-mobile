import { StyleSheet } from 'react-native';

import { WHITE } from 'constants/styles';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    position: 'absolute',
  },

  scrollView: {
    flexGrow: 1,
  },

  welcome: {
    color: WHITE,
    fontWeight: 'bold',
    fontSize: 27,
    textAlign: 'center',
  },

  headerImage: {
    width: '100%',
    height: '30%',
  },

  appIcon: {
    alignSelf: 'center',
    height: '23%',
    marginTop: '10%',
  },

  buttonContainer: {
    height: 40,
    width: '50%',
  },

  formContainer: {
    flex: 1,
  },
});

export default styles;
