import React from 'react';
import { View } from 'react-native';
import { node } from 'prop-types';

import styles from './styles';

const PopUp = ({ children }) => (
  <View style={styles.background}>
    <View style={styles.popUp}>{children}</View>
  </View>
);

PopUp.propTypes = {
  children: node.isRequired,
};

export default PopUp;
