import { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { SUCCESS, useStatus } from '@rootstrap/redux-tools';
import strings from 'locale';

import exclamationIcon from 'images/exclamation.png';
import { getDiaryEntries, sendDiaryEntry } from 'actions/symptomsActions';
import { ALERT, SYMPTOMS_SCREEN } from 'constants/screens';

const useNewDiaryEntry = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { status } = useStatus(sendDiaryEntry);
  const alert = useSelector(({ symptoms: { alert } }) => alert);

  const onClose = useCallback(() => {
    dispatch(getDiaryEntries());
    navigation.navigate(SYMPTOMS_SCREEN);
  }, [dispatch, navigation]);

  useEffect(() => {
    if (status === SUCCESS) {
      if (alert) {
        navigation.navigate(ALERT, {
          title: strings.COMMON.suggestion,
          description: alert,
          rightIcon: exclamationIcon,
          onPress: onClose,
        });
      } else {
        onClose();
      }
      return () => dispatch(sendDiaryEntry.reset());
    }
  }, [alert, dispatch, navigation, onClose, status]);
};
export default useNewDiaryEntry;
