import { StyleSheet } from 'react-native';

import { BOLD_GREY } from 'constants/styles';

const styles = StyleSheet.create({
  linkText: {
    alignSelf: 'flex-end',
    color: BOLD_GREY,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    marginRight: 10,
  },
});

export default styles;
