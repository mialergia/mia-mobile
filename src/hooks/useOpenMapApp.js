import { Alert } from 'react-native';
import LaunchNavigator from 'react-native-launch-navigator';
import { useActionSheet } from '@expo/react-native-action-sheet';
import { isEmpty } from 'validate.js';

import strings from 'locale';
import { getGenericErrorAlert } from 'utils/helpers';
import { mapApplications } from 'constants/data';

const preferredApps = [
  mapApplications.GOOGLE_MAPS,
  mapApplications.APPLE_MAPS,
  mapApplications.WAZE,
];

const useOpenMapApp = coordinates => {
  const { showActionSheetWithOptions } = useActionSheet();
  const { getAvailableApps, getAppDisplayName, navigate } = LaunchNavigator;

  const onOpenMapApp = async () => {
    const navigationOptions = [];
    let hasPreferredAppInstalled = false;

    try {
      let apps = await getAvailableApps();

      preferredApps.forEach(preferredApp => {
        if (apps[preferredApp]) {
          hasPreferredAppInstalled = true;
          navigationOptions.push(getAppDisplayName(preferredApp));
        }
      });

      apps = Object.entries(apps);

      if (!hasPreferredAppInstalled) {
        apps.map(([app, isAvailable]) => {
          if (isAvailable) {
            navigationOptions.push(getAppDisplayName(app));
          }
        });
      }

      if (!isEmpty(navigationOptions)) {
        navigationOptions.push(strings.COMMON.cancel);
        const cancelButtonIndex = navigationOptions.length - 1;

        showActionSheetWithOptions(
          {
            options: navigationOptions,
            destructiveButtonIndex: cancelButtonIndex,
            cancelButtonIndex,
          },
          appSelected => {
            if (appSelected !== cancelButtonIndex) {
              const appSelectedValue = apps.find(
                ([appValue]) => getAppDisplayName(appValue) === navigationOptions[appSelected],
              );
              navigate([coordinates[1], coordinates[0]], { app: appSelectedValue[0] });
            }
          },
        );
      } else {
        Alert.alert(strings.COMMON.error, strings.DIARY_ENTRY.mapAppError, [
          { text: strings.COMMON.accept },
        ]);
      }
    } catch (error) {
      getGenericErrorAlert();
    }
  };

  return { onOpenMapApp };
};

export default useOpenMapApp;
