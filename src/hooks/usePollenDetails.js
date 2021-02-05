import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useStatus, useLoading } from '@rootstrap/redux-tools';

import { getReportDetails } from 'actions/pollenActions';

export default groupId => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getReportDetails(groupId));
  }, [dispatch, groupId]);

  useEffect(() => () => dispatch(getReportDetails.reset()), [dispatch]);

  const { error } = useStatus(getReportDetails);

  return {
    reports: useSelector(({ pollens: { reportDetails } }) => reportDetails || {}),
    loading: useLoading(getReportDetails),
    error,
  };
};
