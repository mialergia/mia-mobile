import { StyleSheet } from 'react-native';

import { GREEN } from 'constants/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
    marginTop: 180,
  },
  title: {
    color: GREEN,
    fontWeight: 'bold',
    fontSize: 27,
    textAlign: 'center',
  },
  headerImage: {
    width: '100%',
    position: 'absolute',
  },
  buttonContainer: {
    height: 40,
    width: '50%',
  },
  formContainer: {
    marginTop: 20,
  },
  alreadySignedButton: {},
  alreadySignedText: {
    fontSize: 16,
    color: GREEN,
    fontWeight: '700',
    marginLeft: 15,
    marginBottom: 15,
  },
});

export default styles;
