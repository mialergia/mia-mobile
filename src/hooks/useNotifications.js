import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { SUCCESS, useLoading, useStatus } from '@rootstrap/redux-tools';
import { useNavigation } from '@react-navigation/native';

import { getNotificationsList } from 'actions/informationActions';
import { updateUserInfo } from 'actions/userActions';
import useSession from './useSession';

const useNotifications = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { status } = useStatus(updateUserInfo);
  const { user } = useSession();

  useEffect(() => {
    dispatch(getNotificationsList());
    return () => dispatch(updateUserInfo.reset());
  }, [dispatch]);

  useEffect(() => {
    if (status === SUCCESS) {
      navigation.goBack();
    }
  }, [dispatch, navigation, status]);

  const { error } = useStatus(getNotificationsList);

  return {
    notificationsList: useSelector(({ information: { notificationsList } }) => notificationsList),
    loading: useLoading(getNotificationsList),
    error,
    user,
  };
};

export default useNotifications;
