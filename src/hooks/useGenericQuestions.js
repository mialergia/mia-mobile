import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useStatus, useLoading } from '@rootstrap/redux-tools';

import { getGenericQuestions } from 'actions/symptomsActions';

export default () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenericQuestions());

    return () => dispatch(getGenericQuestions.reset());
  }, [dispatch]);

  const { error } = useStatus(getGenericQuestions);

  return {
    genericQuestions: useSelector(({ symptoms: { genericQuestions } }) => genericQuestions),
    loading: useLoading(getGenericQuestions),
    error,
  };
};
