import React, { memo } from 'react';
import { Text, Image, SafeAreaView, View } from 'react-native';
import { object } from 'prop-types';

import strings from 'locale';
import useLogin from 'hooks/useLogin';
import firstTimeBackground from 'images/firstTimeBackground.png';
import TouchableText from 'components/common/TouchableText';
import Button from 'components/common/Button';
import DeepLink from 'components/DeepLink';
import { LOGIN_SCREEN, SIGN_UP_SCREEN } from 'constants/screens';
import styles from './styles';

const FirstTimeScreen = ({ navigation }) => {
  useLogin();
  const navigateToLoginScreen = () => navigation.navigate(LOGIN_SCREEN);
  const navigateToSignUpScreen = () => navigation.navigate(SIGN_UP_SCREEN);

  return (
    <>
      <DeepLink />
      <Image style={styles.firstTimeBackground} source={firstTimeBackground} />
      <SafeAreaView style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{strings.FIRST_TIME_SCREEN.title}</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <Button
            containerStyle={styles.startButton}
            title={strings.FIRST_TIME_SCREEN.button}
            onPress={navigateToSignUpScreen}
            inverseStyle
          />
          <TouchableText
            containerStyle={styles.alreadySignedButton}
            textStyle={styles.alreadySignedText}
            text={strings.COMMON.alreadySigned}
            onPress={navigateToLoginScreen}
            underline
          />
        </View>
      </SafeAreaView>
    </>
  );
};

FirstTimeScreen.propTypes = {
  navigation: object.isRequired,
};

export default memo(FirstTimeScreen);
