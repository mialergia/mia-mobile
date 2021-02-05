import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useStatus, useLoading, SUCCESS } from '@rootstrap/redux-tools';

import { sendSymptomsEvent } from 'actions/symptomsActions';
import { updateUser } from 'actions/userActions';
import useSession from './useSession';

const useOnboardingSymptoms = () => {
  const dispatch = useDispatch();
  const { user } = useSession();
  const { error, status } = useStatus(sendSymptomsEvent);

  useEffect(() => {
    if (status === SUCCESS) {
      dispatch(updateUser({ ...user, necesitaOnboarding: false }));

      return () => dispatch(sendSymptomsEvent.reset());
    }
  }, [dispatch, status, user]);

  return {
    loading: useLoading(sendSymptomsEvent),
    error,
  };
};

export default useOnboardingSymptoms;
