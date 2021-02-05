import { StyleSheet } from 'react-native';

import { DARK_GREY } from 'constants/styles';

const styles = StyleSheet.create({
  buttonContainer: {
    marginBottom: 30,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  text: {
    flex: 0.5,
    textAlign: 'center',
    fontSize: 24,
    color: DARK_GREY,
    fontWeight: '600',
  },
  icon: {
    height: 30,
    width: 30,
    marginLeft: 10,
  },
});

export default styles;
