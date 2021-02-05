/* eslint-disable react/no-multi-comp */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {
  EMAIL_SENT_MODAL,
  LOGIN_SCREEN,
  SIGN_UP_SCREEN,
  RESET_PASSWORD_MODAL,
  TERMS_AND_CONDITIONS,
} from 'constants/screens';

import LoginScreen from 'screens/LoginScreen';
import SignUpScreen from 'screens/SignUpScreen';
import { WHITE } from 'constants/styles';
import EmailSentModal from 'screens/EmailSentModal';
import ResetPasswordModal from 'modals/ResetPasswordModal';
import TermsAndConditions from 'components/common/TermsAndConditions';

const Stack = createStackNavigator();

const AuthStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: WHITE } }}>
    <Stack.Screen name={LOGIN_SCREEN} component={LoginScreen} />
    <Stack.Screen name={SIGN_UP_SCREEN} component={SignUpScreen} />
  </Stack.Navigator>
);

const RootStack = createStackNavigator();

const RootAuthStack = () => (
  <RootStack.Navigator
    mode="modal"
    screenOptions={{ cardStyle: { backgroundColor: 'transparent' }, headerShown: false }}>
    <RootStack.Screen name="Auth" component={AuthStack} options={{ headerShown: false }} />
    <RootStack.Screen name={EMAIL_SENT_MODAL} component={EmailSentModal} />
    <RootStack.Screen name={RESET_PASSWORD_MODAL} component={ResetPasswordModal} />
    <RootStack.Screen name={TERMS_AND_CONDITIONS} component={TermsAndConditions} />
  </RootStack.Navigator>
);

export default RootAuthStack;
