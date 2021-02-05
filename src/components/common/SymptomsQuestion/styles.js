import { StyleSheet } from 'react-native';

import { DARK_GREY } from 'constants/styles';
import { HEIGHT } from 'constants/app';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  scrollContainer: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 150,
  },

  imagesContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  icon: {
    position: 'absolute',
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: '25%',
    marginBottom: 30,
  },

  button: {
    marginHorizontal: 10,
  },

  question: {
    position: 'absolute',
    bottom: HEIGHT * 0.03,
    right: 0,
    left: 0,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    color: DARK_GREY,
    marginHorizontal: 20,
  },
  backButton: {
    marginLeft: 10,
    marginTop: 0,
  },
});

export default styles;
