import React, { memo } from 'react';
import { Text, ActivityIndicator, ViewPropTypes, TouchableOpacity } from 'react-native';
import { string, func, bool, object } from 'prop-types';

import { WHITE, BOLD_GREY } from 'constants/styles';
import { stylesFunction } from './styles';

const Button = ({
  title,
  onPress,
  loading,
  inverseStyle = false,
  containerStyle,
  textStyle,
  roundIcon = false,
  disabled = false,
}) => {
  const styles = stylesFunction(inverseStyle, containerStyle, textStyle, roundIcon, disabled);

  return (
    <TouchableOpacity
      onPress={onPress}
      style={roundIcon ? styles.roundContainer : styles.container}
      disabled={disabled || loading}>
      {loading ? (
        <ActivityIndicator color={inverseStyle ? BOLD_GREY : WHITE} size="small" />
      ) : (
        <Text style={styles.title}>{roundIcon ? '+' : title}</Text>
      )}
    </TouchableOpacity>
  );
};

Button.propTypes = {
  title: string.isRequired,
  onPress: func.isRequired,
  loading: bool,
  inverseStyle: bool,
  containerStyle: ViewPropTypes.style,
  textStyle: object,
  roundIcon: bool,
  disabled: bool,
};
export default memo(Button);
