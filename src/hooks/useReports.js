import { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useStatus, useLoading } from '@rootstrap/redux-tools';

import { getReports } from 'actions/pollenActions';
import { useNavigation } from '@react-navigation/native';

export default () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const onGetReports = useCallback(() => {
    dispatch(getReports());
  }, [dispatch]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      onGetReports();
    });

    return unsubscribe;
  }, [dispatch, navigation, onGetReports]);

  const { error } = useStatus(getReports);

  return {
    onGetReports,
    reports: useSelector(({ pollens: { reports } }) => reports || {}),
    loading: useLoading(getReports),
    error,
  };
};
