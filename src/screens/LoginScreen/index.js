import React, { memo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Text, Image, SafeAreaView } from 'react-native';
import { object } from 'prop-types';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import LoginForm from 'components/LoginForm';
import Button from 'components/common/Button';
import { login } from 'actions/userActions';
import strings from 'locale';
import { SIGN_UP_SCREEN } from 'constants/screens';
import headerImage from 'images/header.png';
import appIcon from 'images/appIcon.png';
import DeepLink from 'components/DeepLink';
import useLogin from 'hooks/useLogin';
import styles from './styles';

const LoginScreen = ({ navigation }) => {
  useLogin();
  const dispatch = useDispatch();
  const loginRequest = useCallback(user => dispatch(login(user)), [dispatch]);
  const handleLogin = useCallback(() => navigation.push(SIGN_UP_SCREEN), [navigation]);

  return (
    <>
      <DeepLink />
      <Image source={headerImage} style={styles.headerImage} resizeMode="stretch" />
      <SafeAreaView style={styles.container}>
        <KeyboardAwareScrollView
          contentContainerStyle={styles.scrollView}
          enableOnAndroid
          keyboardShouldPersistTaps="always">
          <Text style={styles.appName}>{strings.COMMON.appName}</Text>
          <Text style={styles.welcome}>{strings.LOG_IN.title}</Text>
          <Image source={appIcon} style={styles.appIcon} resizeMode="contain" />
          <LoginForm onSubmit={loginRequest} />
          <Button
            title={strings.SIGN_UP.signUpButton}
            onPress={handleLogin}
            inverseStyle
            containerStyle={styles.buttonContainer}
          />
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </>
  );
};

LoginScreen.propTypes = {
  navigation: object.isRequired,
};

export default memo(LoginScreen);
