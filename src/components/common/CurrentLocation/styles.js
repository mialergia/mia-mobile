import { StyleSheet } from 'react-native';

import { DARK_GREY } from 'constants/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    marginHorizontal: 30,
  },
  title: {
    fontSize: 24,
    color: DARK_GREY,
    fontWeight: '500',
    marginBottom: 10,
  },
});

export default styles;
