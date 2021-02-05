import { StyleSheet } from 'react-native';
import { BACKGROUND_COLOR, DARK_GREY } from 'constants/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
  },
  sectionContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  buttonsContainer: {
    alignItems: 'stretch',
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 40,
  },
  headerText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 23,
  },
  sectionTitle: {
    fontSize: 23,
    color: DARK_GREY,
    fontWeight: '600',
  },
});

export default styles;
