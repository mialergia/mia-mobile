import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import useSession from 'hooks/useSession';
import usePushNotifications from 'hooks/usePushNotifications';
import { APP_STACK, AUTH_STACK } from 'constants/screens';
import AppStack from './AppStack';
import AuthStack from './AuthStack';

const Stack = createStackNavigator();

const Navigation = () => {
  const { user, info } = useSession();
  usePushNotifications();
  const authenticated = user && info;

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        {authenticated ? (
          <Stack.Screen name={APP_STACK} component={AppStack} />
        ) : (
          <Stack.Screen name={AUTH_STACK} component={AuthStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
