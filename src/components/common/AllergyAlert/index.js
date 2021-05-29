import React, { useMemo } from 'react';
import { View, Text, Image } from 'react-native';

import { getAlertIcon } from 'utils/helpers';
import { alertShape } from 'constants/shapes';
import { getStyles } from './styles';

const AllergyAlert = ({ alert: { warningMessage, nivel } }) => {
  const { icon, backgroundColor } = useMemo(() => {
    const { icon, backgroundColor } = getAlertIcon(nivel);
    return { icon, backgroundColor };
  }, [nivel]);

  const styles = getStyles(backgroundColor);
  return (
    <View key={warningMessage} style={styles.container}>
      <Image style={styles.icon} source={icon} resizeMode="contain" />
      <Text style={styles.alert}>{warningMessage}</Text>
    </View>
  );
};

AllergyAlert.propTypes = {
  alert: alertShape,
};

export default AllergyAlert;
