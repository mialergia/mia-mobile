import React from 'react';
import { TouchableOpacity, ViewPropTypes } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { string } from 'prop-types';

import BackArrow from 'components/common/Icons/BackArrow';
import styles from './styles';

const BackButton = ({ containerStyle, arrowColor }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={() => navigation.goBack()}>
      <BackArrow color={arrowColor} />
    </TouchableOpacity>
  );
};

BackButton.propTypes = {
  containerStyle: ViewPropTypes.style,
  arrowColor: string,
};

export default BackButton;
