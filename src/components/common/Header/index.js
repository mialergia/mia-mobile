import React from 'react';
import { Image, Text, SafeAreaView, View, ViewPropTypes } from 'react-native';
import { string, node, bool } from 'prop-types';

import BackButton from 'components/common/BackButton';
import { DARK_GREEN } from 'constants/styles';
import { getStyles } from './styles';

const Header = ({
  title,
  icon,
  backButton = true,
  containerStyle,
  textStyle,
  arrowColor,
  backgroundColor = DARK_GREEN,
}) => {
  const styles = getStyles(backgroundColor, !!backButton);

  return (
    <>
      <SafeAreaView style={[styles.safeArea, containerStyle]}>
        {!!backButton && <BackButton containerStyle={styles.backButton} arrowColor={arrowColor} />}
        <View style={styles.container}>
          <Text style={[styles.title, textStyle]}>{title}</Text>
          {!!icon && <Image source={icon} />}
        </View>
      </SafeAreaView>
    </>
  );
};

Header.propTypes = {
  title: string.isRequired,
  icon: node,
  backButton: bool,
  containerStyle: ViewPropTypes.style,
  textStyle: Text.propTypes.style,
  arrowColor: string,
  backgroundColor: string,
};

export default Header;
