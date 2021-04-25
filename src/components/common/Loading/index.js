import React from 'react';
import { ActivityIndicator, View, ViewPropTypes } from 'react-native';
import { string } from 'prop-types';

import styles from './styles';

const Loading = ({ color, containerStyle, ...props }) => (
  <View style={[styles.container, containerStyle]}>
    <ActivityIndicator color={color} size="large" {...props} />
  </View>
);

Loading.propTypes = {
  color: string,
  containerStyle: ViewPropTypes.style,
};

export default Loading;
