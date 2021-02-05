import { StyleSheet } from 'react-native';
import { DARK_GREY } from 'constants/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 24,
    color: DARK_GREY,
    fontWeight: '500',
    marginBottom: 10,
    marginTop: 30,
  },
  otherComment: {
    alignItems: 'flex-start',
    height: 250,
    paddingTop: 25,
    paddingRight: 17,
  },
  button: {
    marginTop: 40,
  },
});

export default styles;
