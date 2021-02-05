import { StyleSheet } from 'react-native';

import { INPUT_STYLE, PLACEHOLDER_COLOR } from 'constants/styles';

const styles = StyleSheet.create({
  container: {
    ...INPUT_STYLE,
    color: PLACEHOLDER_COLOR,
  },
  placeholder: {
    color: PLACEHOLDER_COLOR,
  },
  containerSubsection: {
    ...INPUT_STYLE,
    color: PLACEHOLDER_COLOR,
    paddingLeft: 0,
  },
});

export default styles;
