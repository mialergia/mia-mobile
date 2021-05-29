import { StyleSheet } from 'react-native';

import { WHITE } from 'constants/styles';

export const ANIMATED_HEADER_HEIGHT = 160;

const styles = StyleSheet.create({
  container: translateY => ({
    height: translateY || 150,
  }),
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: WHITE,
    marginLeft: 20,
    textAlign: 'center',
    marginVertical: 15,
  },
  backButton: {
    marginHorizontal: 10,
  },
  headerBackground: (translateY = false) => ({
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    width: '100%',
    height: translateY ? ANIMATED_HEADER_HEIGHT : 150,
  }),
});

export default styles;
