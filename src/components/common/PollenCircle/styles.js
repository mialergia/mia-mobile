import { StyleSheet } from 'react-native';
import { DARK_GREY, BLACK } from 'constants/styles';

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginLeft: 80,
  },

  circleContainer: {
    flex: 1,
    alignItems: 'center',
  },

  title: {
    fontSize: 20,
    color: DARK_GREY,
    marginTop: 20,
  },

  description: {
    fontSize: 18,
    fontWeight: 'bold',
    color: BLACK,
    marginBottom: 20,
    textAlign: 'center',
    textTransform: 'capitalize',
  },

  buttonContainer: {
    marginLeft: 10,
    height: 35,
    width: 70,
    marginTop: 70,
  },

  buttonText: {
    fontSize: 15,
  },

  separator: {
    width: '80%',
    height: 3,
  },
});

export default styles;
