import React from 'react';
import { Image, ViewPropTypes, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import closeIcon from 'images/close.png';
import styles from './styles';

const CloseButton = ({ containerStyle }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={() => navigation.goBack()}>
      <Image style={styles.image} source={closeIcon} />
    </TouchableOpacity>
  );
};

CloseButton.propTypes = {
  containerStyle: ViewPropTypes.style,
};

export default CloseButton;
