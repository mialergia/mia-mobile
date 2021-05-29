import { StyleSheet } from 'react-native';
import { WHITE, BACKGROUND_COLOR } from 'constants/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: BACKGROUND_COLOR,
  },
  headerText: {
    flex: 1,
    textAlign: 'center',
    color: WHITE,
    fontSize: 20,
  },
});

export default styles;
