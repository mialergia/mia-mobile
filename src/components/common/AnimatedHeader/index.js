import React from 'react';
import { Text, SafeAreaView, Animated, ImageBackground } from 'react-native';
import { string, bool, object } from 'prop-types';

import header from 'images/greenHeader.png';
import BackButton from 'components/common/BackButton';
import { WHITE } from 'constants/styles';
import styles, { ANIMATED_HEADER_HEIGHT } from 'components/common/AnimatedHeader/styles';

const AnimatedHeader = ({
  backButton = false,
  scrollY = false,
  arrowColor = WHITE,
  title = false,
  textStyle,
}) => {
  const translateY =
    scrollY &&
    scrollY.interpolate({
      inputRange: [0, ANIMATED_HEADER_HEIGHT],
      outputRange: [ANIMATED_HEADER_HEIGHT, 50],
      extrapolate: 'clamp',
    });

  return (
    <Animated.View style={styles.container(translateY)}>
      <ImageBackground source={header} style={styles.headerBackground(translateY)} blurRadius={0}>
        <SafeAreaView>
          {!!backButton && (
            <BackButton containerStyle={styles.backButton} arrowColor={arrowColor} />
          )}
          {title && <Text style={[styles.title, textStyle]}>{title}</Text>}
        </SafeAreaView>
      </ImageBackground>
    </Animated.View>
  );
};

AnimatedHeader.propTypes = {
  backButton: bool,
  scrollY: object,
  arrowColor: string,
  title: string,
  textStyle: Text.propTypes.style,
};

export default AnimatedHeader;
