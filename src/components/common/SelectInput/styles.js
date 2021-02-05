import { StyleSheet } from 'react-native';

import { LIGHT_LILAC, WHITE } from 'constants/styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: LIGHT_LILAC,
    paddingVertical: 20,
    marginVertical: 3,
    paddingHorizontal: 20,
  },

  checkbox: {
    backgroundColor: WHITE,
    marginRight: 20,
  },

  textContainer: {
    flex: 1,
  },

  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  description: {
    fontSize: 15,
  },

  icon: {
    marginLeft: 20,
  },
});
export default styles;
