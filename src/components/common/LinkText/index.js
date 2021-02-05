import React from 'react';
import { func, string } from 'prop-types';
import { Text } from 'react-native';

import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';

const LinkText = ({ onPress, text }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.linkText}>{text}</Text>
    </TouchableOpacity>
  );
};

LinkText.propTypes = {
  onPress: func.isRequired,
  text: string.isRequired,
};

export default LinkText;
