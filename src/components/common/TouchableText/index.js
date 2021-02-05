import React from 'react';
import { TouchableOpacity, Text, ViewPropTypes } from 'react-native';
import { string, bool, func } from 'prop-types';

import { stylesFunction } from './styles';

const TouchableText = ({ text, containerStyle, underline, onPress, textStyle }) => {
  const styles = stylesFunction(!!underline);

  return (
    <TouchableOpacity style={containerStyle} onPress={onPress}>
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

TouchableText.propTypes = {
  text: string.isRequired,
  containerStyle: ViewPropTypes.style,
  onPress: func.isRequired,
  underline: bool,
  textStyle: Text.propTypes.style,
};

export default TouchableText;
