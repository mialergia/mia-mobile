import { StyleSheet } from 'react-native';

import { WHITE, BACKGROUND_COLOR } from 'constants/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
  },

  tabBar: {
    height: 70,
    paddingBottom: 5,
  },

  navigatorStyle: {
    backgroundColor: BACKGROUND_COLOR,
  },
});

export default styles;
