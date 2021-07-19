import React, { useMemo } from 'react';
import { View, Text, Image, Animated } from 'react-native';
import { object, string } from 'prop-types';
import strings from 'locale';

import calendarIcon from 'images/calendar.png';
import mapPointIcon from 'images/mapPoint.png';
import { alertShape } from 'constants/shapes';
import { getAlertIcon } from 'utils/helpers';
import { ANIMATED_HEADER_HEIGHT } from 'components/common/AnimatedHeader/styles';
import styles from './styles';

const ReportInfo = ({ scrollY, date, alert: { warningMessage, nivel } = {} }) => {
  const translateY = scrollY.interpolate({
    inputRange: [0, ANIMATED_HEADER_HEIGHT],
    outputRange: [0, -(ANIMATED_HEADER_HEIGHT - 220)],
    extrapolate: 'clamp',
  });

  const opacity = scrollY.interpolate({
    inputRange: [0, 10],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  const { icon, backgroundColor } = useMemo(() => {
    const { icon, backgroundColor } = getAlertIcon(nivel);
    return { icon, backgroundColor };
  }, [nivel]);

  return (
    <Animated.View style={styles.container(translateY)}>
      <View style={styles.reportContainer}>
        {warningMessage && (
          <View style={styles.alertIcon(backgroundColor)}>
            <Image source={icon} />
          </View>
        )}
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{strings.POLLEN_SCREEN.headerTitle}</Text>
          <View style={styles.rowContainer}>
            <Image source={calendarIcon} style={styles.icon} />
            <Text style={styles.row}>{date}</Text>
          </View>
          <View style={styles.rowContainer}>
            <Image source={mapPointIcon} style={styles.icon} />
            <Text style={styles.row}>{strings.POLLEN_SCREEN.location}</Text>
          </View>
        </View>
      </View>
      {warningMessage && (
        <Animated.View style={styles.alertContainer(opacity)}>
          <View style={styles.background(backgroundColor)} />
          <Text style={styles.alertMessage}>{warningMessage}</Text>
        </Animated.View>
      )}
    </Animated.View>
  );
};

ReportInfo.propTypes = {
  scrollY: object.isRequired,
  date: string.isRequired,
  alert: alertShape,
};

export default ReportInfo;
