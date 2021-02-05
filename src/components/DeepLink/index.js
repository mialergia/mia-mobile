/* eslint-disable no-use-before-define */
import { useEffect } from 'react';
import { Linking } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { LOGIN_SCREEN } from 'constants/screens';

const DeepLink = () => {
  const navigation = useNavigation();

  useEffect(() => {
    Linking.getInitialURL().then(url => {
      url && handleDeepLink(url);
    });

    Linking.addEventListener('url', ({ url }) => handleDeepLink(url));
  });

  useEffect(() => () => {
    Linking.removeEventListener('url', ({ url }) => handleDeepLink(url));
  });

  const handleDeepLink = async url => {
    const route = url.replace(/.*?:\/\//g, '').split('?')[0];

    switch (route) {
      case 'account-confirmed':
        navigation.navigate(LOGIN_SCREEN);
        break;

      default:
        break;
    }
  };
  return false;
};

export default DeepLink;
