import React from 'react';
import { ActivityIndicator, View, ViewPropTypes } from 'react-native';
import { string } from 'prop-types';

import styles from './styles';

const Loading = ({ color, containerStyle }) => (
  <View style={[styles.container, containerStyle]}>
    <ActivityIndicator color={color} size="large" />
  </View>
);

Loading.propTypes = {
  color: string,
  containerStyle: ViewPropTypes.style,
};

export default Loading;
