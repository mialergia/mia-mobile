import React from 'react';
import { Alert, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { SafeAreaView } from 'react-navigation';
import strings from 'locale';
import {
  checkNotifications,
  openSettings,
  requestNotifications,
  RESULTS,
} from 'react-native-permissions';

import NotificationsForm from 'components/NotificationsForm';
import BackButton from 'components/common/BackButton';
import Loading from 'components/common/Loading';
import Error from 'components/common/Error';
import { updateUserInfo } from 'actions/userActions';
import useNotifications from 'hooks/useNotifications';
import styles from './styles';

const NotificationsScreen = () => {
  const dispatch = useDispatch();
  const { notificationsList, loading, error, user } = useNotifications();

  const onSubmit = notifications => {
    const notificaciones = [];
    Object.entries(notifications).forEach(
      ([id, value]) => value && notificaciones.push(Number(id)),
    );

    dispatch(updateUserInfo({ ...user, notificaciones }));
  };

  if (error) {
    return <Error errorMessage={error} />;
  }

  if (loading) {
    return <Loading />;
  }

  const askForPermission = () => {
    return checkNotifications().then(({ status }) => {
      if (status === RESULTS.DENIED) {
        requestNotifications(['alert', 'sound']);
      }

      if (status === RESULTS.BLOCKED) {
        Alert.alert(
          strings.SETTINGS_SCREEN.notificationsBlockedTitle,
          strings.SETTINGS_SCREEN.notificationsBlockedBody,
          [
            { text: strings.COMMON.cancel },
            { text: strings.COMMON.openSettings, onPress: openSettings },
          ],
        );
      }
      return status;
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <BackButton />
      <Text style={styles.screenTitle}>{strings.SETTINGS_SCREEN.notificationsSection}</Text>
      <NotificationsForm
        notificationsList={notificationsList}
        initialData={user.notificaciones}
        onSubmit={onSubmit}
        askForPermission={askForPermission}
      />
    </SafeAreaView>
  );
};

NotificationsScreen.navigationOptions = {
  title: strings.SETTINGS_SCREEN.title,
};

export default NotificationsScreen;
