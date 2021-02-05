/* eslint-disable react/no-multi-comp */
import React from 'react';
import { View, ViewPropTypes } from 'react-native';
import { bool } from 'prop-types';

import { getStyles } from './styles';

const Separator = ({ vertical = false, containerStyle }) => {
  const styles = getStyles(vertical);
  return <View style={[styles.separator, containerStyle]} />;
};

Separator.propTypes = {
  vertical: bool,
  containerStyle: ViewPropTypes.style,
};

export default Separator;
