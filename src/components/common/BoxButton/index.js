import React from 'react';
import { ViewPropTypes } from 'react-native';
import { func, node } from 'prop-types';

import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';

const BoxButton = ({ onPress, children, containerStyle }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, containerStyle]}>
      {children}
    </TouchableOpacity>
  );
};

BoxButton.propTypes = {
  onPress: func.isRequired,
  children: node.isRequired,
  containerStyle: ViewPropTypes.style,
};

export default BoxButton;
