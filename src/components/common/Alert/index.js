import React from 'react';
import { View, Text, Image } from 'react-native';
import { func, node, string } from 'prop-types';
import strings from 'locale';

import Button from 'components/common/Button';
import { routeShape } from 'constants/shapes';
import styles from './styles';

const Alert = ({
  route: {
    params: { title, description, onPress, rightIcon },
  },
}) => (
  <View style={styles.container}>
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{title}</Text>
      {rightIcon && <Image style={styles.rightIcon} source={rightIcon} />}
    </View>
    <Text style={styles.description}>{description}</Text>
    <Button title={strings.COMMON.accept} onPress={onPress} />
  </View>
);

Alert.propTypes = {
  route: routeShape({
    title: string.isRequired,
    description: string.isRequired,
    onPress: func.isRequired,
    rightIcon: node,
  }),
};

export default Alert;
