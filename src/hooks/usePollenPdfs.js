import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useStatus, useLoading } from '@rootstrap/redux-tools';

import { getPollenPdfs } from 'actions/pollenActions';

export default groupId => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPollenPdfs(groupId));
  }, [dispatch, groupId]);

  useEffect(() => () => dispatch(getPollenPdfs.reset()), [dispatch]);

  const { error } = useStatus(getPollenPdfs);

  return {
    pollens: useSelector(({ pollens: { pollens } }) => pollens || []),
    loading: useLoading(getPollenPdfs),
    error,
  };
};
