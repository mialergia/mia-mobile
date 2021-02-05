import { StyleSheet } from 'react-native';

import { INPUT_STYLE, PLACEHOLDER_COLOR, WHITE, BOLD_GREY } from 'constants/styles';
import { isIos } from 'constants/app';

const styles = StyleSheet.create({
  container: {
    ...INPUT_STYLE,
    flexDirection: isIos ? 'row' : 'column',
    alignItems: isIos ? 'center' : 'stretch',
  },
  placeholder: {
    color: PLACEHOLDER_COLOR,
  },
  modalHeader: {
    backgroundColor: WHITE,
    borderBottomWidth: 0.5,
    borderColor: BOLD_GREY,
  },
  modal: {
    backgroundColor: WHITE,
  },
});

export default styles;
