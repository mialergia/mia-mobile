import React, { useCallback } from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';

import settingsIcon from 'images/settings.png';
import addIcon from 'images/add.png';
import leafIcon from 'images/leaf.png';
import { POLLEN_SCREEN, SYMPTOMS_SCREEN, SETTINGS_SCREEN } from 'constants/screens';
import PollenScreen from 'screens/PollenScreen';
import SymptomsScreen from 'screens/SymptomsScreen';
import SettingsScreen from 'screens/Settings/SettingsScreen';
import { GREEN, MEDIUM_GREY } from 'constants/styles';
import styles from './styles';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const getTabBarIcon = useCallback(name => {
    let iconTab;

    switch (name) {
      case POLLEN_SCREEN:
        iconTab = leafIcon;
        break;
      case SYMPTOMS_SCREEN:
        iconTab = addIcon;
        break;
      default:
        iconTab = settingsIcon;
        break;
    }

    return <Image source={iconTab} />;
  }, []);

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <Tab.Navigator
        screenOptions={({ route }) => ({ tabBarIcon: () => getTabBarIcon(route.name) })}
        tabBarOptions={{
          activeTintColor: GREEN,
          inactiveTintColor: MEDIUM_GREY,
          style: styles.tabBar,
          safeAreaInsets: { bottom: 60 },
        }}>
        <Tab.Screen name={POLLEN_SCREEN} component={PollenScreen} />
        <Tab.Screen name={SYMPTOMS_SCREEN} component={SymptomsScreen} />
        <Tab.Screen name={SETTINGS_SCREEN} component={SettingsScreen} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default TabNavigator;
