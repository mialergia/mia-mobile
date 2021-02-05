import React from 'react';
import { SafeAreaView, Text, Image } from 'react-native';
import { string } from 'prop-types';

import emptyImage from 'images/empty.png';
import styles from './styles';

const EmptyState = ({ emptyMessage }) => (
  <SafeAreaView style={styles.container}>
    <Image style={styles.image} source={emptyImage} resizeMode="contain" />
    <Text style={styles.text}>{emptyMessage}</Text>
  </SafeAreaView>
);

EmptyState.propTypes = {
  emptyMessage: string,
};

export default EmptyState;
