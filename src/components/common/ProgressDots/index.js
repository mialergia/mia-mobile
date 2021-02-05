import React, { memo } from 'react';
import { View, ViewPropTypes } from 'react-native';
import { number } from 'prop-types';

import styles from './styles';

const ProgressDots = ({ activeNumber, maxNumber, containerStyle }) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {Array(maxNumber)
        .fill()
        .map((_, index) => {
          const isActive = index === activeNumber;
          return <View key={index} style={[styles.dot, isActive && styles.active]} />;
        })}
    </View>
  );
};

ProgressDots.propTypes = {
  activeNumber: number.isRequired,
  maxNumber: number.isRequired,
  containerStyle: ViewPropTypes.style,
};

export default memo(ProgressDots);
