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
    flex: 0.3,
    marginHorizontal: '8%',
    justifyContent: 'space-between',
  },
  resendEmail: {
    marginTop: 15,
  },
});

export default styles;
