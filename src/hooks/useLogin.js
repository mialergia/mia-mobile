/* eslint-disable react-hooks/exhaustive-deps */
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { SUCCESS, useStatus } from '@rootstrap/redux-tools';

import { login, updateUserInfo } from 'actions/userActions';
import useSession from './useSession';

const useLogin = () => {
  const dispatch = useDispatch();
  const { status } = useStatus(login);
  const { user } = useSession();
  const onesignalPlayerId = useSelector(({ session: { onesignalPlayerId } }) => onesignalPlayerId);

  useEffect(() => {
    if (status === SUCCESS) {
      dispatch(updateUserInfo({ ...user, onesignalPlayerId }));
      return () => dispatch(login.reset());
    }
  }, [dispatch, onesignalPlayerId, status]);
};

export default useLogin;
