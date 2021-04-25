import React from 'react';
import { func, string } from 'prop-types';
import { Text, ViewPropTypes } from 'react-native';

import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';

const LinkText = ({ onPress, text, containerStyle }) => {
  return (
    <TouchableOpacity style={containerStyle} onPress={onPress}>
      <Text style={styles.linkText}>{text}</Text>
    </TouchableOpacity>
  );
};

LinkText.propTypes = {
  onPress: func.isRequired,
  text: string.isRequired,
  containerStyle: ViewPropTypes.style,
};

export default LinkText;
