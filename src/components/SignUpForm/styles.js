import { GREEN } from 'constants/styles';
import { StyleSheet } from 'react-native';

export const buttonContainerStyle = {
  marginTop: 20,
};

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    borderColor: 'lightblue',
    borderRadius: 5,
    borderWidth: 2,
  },
  container: {
    marginHorizontal: '8%',
    justifyContent: 'space-between',
  },
  resendEmailButton: {
    marginTop: -25,
    alignSelf: 'center',
  },
  resendEmailText: {
    fontSize: 19,
    color: GREEN,
    marginTop: 20,
  },
  buttonsContainer: {
    marginTop: 35,
  },
});

export default styles;
