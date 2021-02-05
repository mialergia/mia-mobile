import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useLoading, useStatus } from '@rootstrap/redux-tools';

import { getTermsConditions } from 'actions/informationActions';

const useTermsAndConditions = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTermsConditions());
  }, [dispatch]);

  const { error } = useStatus(getTermsConditions);

  return {
    termsConditions: useSelector(({ information: { termsConditions } }) => termsConditions),
    loading: useLoading(getTermsConditions),
    error,
    onesignalPlayerId: useSelector(({ session: { onesignalPlayerId } }) => onesignalPlayerId),
  };
};

export default useTermsAndConditions;
