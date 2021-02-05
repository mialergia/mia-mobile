import { StyleSheet } from 'react-native';
import { DARK_GREY } from 'constants/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 20,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 80,
  },
  text: {
    color: DARK_GREY,
  },
  image: {
    height: 350,
    width: 350,
  },
  backbutton: {
    marginLeft: 20,
  },
});

export default styles;
