import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { getDiaryEntries } from 'actions/symptomsActions';
import { useLoading, useStatus } from '@rootstrap/redux-tools';

const useDiaryEntries = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDiaryEntries());
  }, [dispatch]);

  const { error } = useStatus(getDiaryEntries);

  return {
    diaryEntries: useSelector(({ symptoms: { diaryEntries } }) => diaryEntries || []),
    loading: useLoading(getDiaryEntries),
    error,
  };
};

export default useDiaryEntries;
