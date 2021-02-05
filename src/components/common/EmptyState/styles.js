import { StyleSheet } from 'react-native';
import { DARK_GREY } from 'constants/styles';
import { PIXEL_HEIGHT } from 'constants/app';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 65,
  },
  errorContainer: {
    flex: 1,
  },
  text: {
    color: DARK_GREY,
    textAlign: 'center',
    marginHorizontal: 30,
  },
  image: {
    height: PIXEL_HEIGHT * 0.45,
  },
  backbutton: {
    marginLeft: 20,
  },
});

export default styles;
