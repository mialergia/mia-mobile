import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { getDiaryQuestions } from 'actions/symptomsActions';
import { useLoading, useStatus } from '@rootstrap/redux-tools';

const useDiaryQuestions = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDiaryQuestions());
  }, [dispatch]);

  const { error } = useStatus(getDiaryQuestions);

  return {
    questions: useSelector(({ symptoms: { diaryQuestions } }) => diaryQuestions || []),
    loading: useLoading(getDiaryQuestions),
    error,
  };
};

export default useDiaryQuestions;
