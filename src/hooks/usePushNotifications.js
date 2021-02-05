/* eslint-disable no-console */
import { useCallback, useEffect } from 'react';
import OneSignal from 'react-native-onesignal';
import Config from 'react-native-config';
import { useDispatch, useSelector } from 'react-redux';

import { setOneSignalId } from 'actions/userActions';
import { isIos } from 'constants/app';

const usePushNotifications = () => {
  const onesignalPlayerId = useSelector(({ session: { onesignalPlayerId } }) => onesignalPlayerId);
  const dispatch = useDispatch();

  const onReceived = useCallback(() => {
    OneSignal.inFocusDisplaying(2);
  });

  const onOpened = openResult => {
    console.log('Message: ', openResult.notification.payload.body);
    console.log('Data: ', openResult.notification.payload.additionalData);
    console.log('isActive: ', openResult.notification.isAppInFocus);
    console.log('openResult: ', openResult);
  };

  const onIds = useCallback(
    device => {
      if (!onesignalPlayerId) {
        dispatch(setOneSignalId(device.userId));
      }
    },
    [dispatch, onesignalPlayerId],
  );

  useEffect(() => {
    const oneSignalId = isIos ? Config.ONE_SIGNAL_IOS_ID : Config.ONE_SIGNAL_ANDROID_ID;

    OneSignal.init(oneSignalId, {
      kOSSettingsKeyAutoPrompt: false,
      kOSSettingsKeyInAppLaunchURL: false,
      kOSSettingsKeyInFocusDisplayOption: 2,
    });
    OneSignal.addEventListener('received', onReceived);
    OneSignal.addEventListener('opened', onOpened);
    OneSignal.addEventListener('ids', onIds);
  }, [onIds, onReceived]);

  useEffect(
    () => () => {
      OneSignal.removeEventListener('received', onReceived);
      OneSignal.removeEventListener('opened', onOpened);
      OneSignal.removeEventListener('ids', onIds);
    },
    [onIds, onReceived],
  );
};
export default usePushNotifications;
