import { StyleSheet } from 'react-native';

import { WHITE } from 'constants/styles';

const styles = StyleSheet.create({
  firstTimeBackground: {
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
  titleContainer: {
    height: '60%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    color: WHITE,
    fontWeight: '700',
  },
  buttonsContainer: {
    height: '40%',
    justifyContent: 'space-between',
  },
  startButton: {
    height: 60,
  },
  alreadySignedButton: {
    marginLeft: 25,
  },
  alreadySignedText: {
    fontSize: 17,
    color: WHITE,
    fontWeight: '700',
    marginBottom: 15,
  },
});

export default styles;
