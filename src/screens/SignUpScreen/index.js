import React, { memo, useCallback, useEffect, useState } from 'react';
import { Text, Image, SafeAreaView, View } from 'react-native';
import { SUCCESS, useStatus } from '@rootstrap/redux-tools';
import { object } from 'prop-types';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import strings from 'locale';
import { useDispatch } from 'react-redux';

import SignUpForm from 'components/SignUpForm';
import signUpHeader from 'images/signUpHeader.png';
import ErrorView from 'components/common/ErrorView';
import { EMAIL_SENT_MODAL, LOGIN_SCREEN, TERMS_AND_CONDITIONS } from 'constants/screens';
import DeepLink from 'components/DeepLink';
import { resendVerificationEmail, signUp } from 'actions/userActions';
import TouchableText from 'components/common/TouchableText';
import styles from './styles';

const SignUpScreen = memo(({ navigation }) => {
  const dispatch = useDispatch();
  const { status } = useStatus(signUp);
  const { error } = useStatus(resendVerificationEmail);
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (status === SUCCESS) {
      navigation.navigate(EMAIL_SENT_MODAL, {
        email,
        actionText: strings.SIGN_UP.emailAction,
        resetAction: () => {
          dispatch(signUp.reset());
          navigation.goBack();
        },
        resendAction: resendVerificationEmail,
      });
    }
  }, [dispatch, email, navigation, status]);

  const signUpRequest = useCallback(
    user => {
      setEmail(user.email);
      navigation.navigate(TERMS_AND_CONDITIONS, { user });
    },
    [navigation],
  );

  const navigateToLoginScreen = () => navigation.navigate(LOGIN_SCREEN);

  return (
    <>
      <DeepLink />
      <Image source={signUpHeader} style={styles.headerImage} resizeMode="stretch" />
      <SafeAreaView style={styles.container}>
        <KeyboardAwareScrollView
          enableOnAndroid
          keyboardShouldPersistTaps="always"
          contentContainerStyle={styles.scrollContainer}>
          <View>
            <Text style={styles.title}>{strings.SIGN_UP.title}</Text>
            <View style={styles.formContainer}>
              <SignUpForm onSubmit={signUpRequest} />
              {error && <ErrorView errors={{ error: strings.COMMON.somethingWentWrong }} />}
            </View>
          </View>
          <TouchableText
            containerStyle={styles.alreadySignedButton}
            textStyle={styles.alreadySignedText}
            text={strings.COMMON.alreadySigned}
            onPress={navigateToLoginScreen}
          />
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </>
  );
});

SignUpScreen.propTypes = {
  navigation: object.isRequired,
};

export default SignUpScreen;
