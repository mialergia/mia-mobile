import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useStatus, useLoading, SUCCESS } from '@rootstrap/redux-tools';
import { useNavigation } from '@react-navigation/native';

import { getAllergies } from 'actions/pollenActions';
import { changeToFrontendFormat } from 'utils/dateHelpers';
import { filterAllergies, filterUserAllergies } from 'utils/helpers';
import { updateUserInfo } from 'actions/userActions';

import useSession from './useSession';

export default fromOnboarding => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { user } = useSession();
  const { status } = useStatus(updateUserInfo);

  useEffect(() => {
    dispatch(getAllergies());
    return () => dispatch(getAllergies.reset());
  }, [dispatch]);

  useEffect(() => {
    if (!fromOnboarding && status === SUCCESS) {
      navigation.goBack();
      return () => dispatch(updateUserInfo.reset());
    }
  }, [dispatch, fromOnboarding, navigation, status]);
  const { error } = useStatus(getAllergies);

  const allergies = useSelector(({ pollens: { allergies } }) => {
    return { all: allergies, filteredAllergies: filterAllergies(allergies) };
  });

  const { alergias, fechaNacimiento, ...curentUser } = user;

  return {
    allergies,
    loading: useLoading(getAllergies),
    user: {
      ...curentUser,
      fechaNacimiento: fechaNacimiento ? changeToFrontendFormat(fechaNacimiento) : null,
      alergias: filterUserAllergies(alergias, allergies.all),
    },
    error,
  };
};
