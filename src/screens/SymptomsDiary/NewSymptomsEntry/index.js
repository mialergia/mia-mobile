import React from 'react';
import { SafeAreaView } from 'react-native';
import { useDispatch } from 'react-redux';
import { shape } from 'prop-types';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { sendDiaryEntry } from 'actions/symptomsActions';
import DiaryForm from 'components/DiaryForm';
import { changeToBackendFormat } from 'utils/dateHelpers';
import { diaryAnswers } from 'constants/shapes';
import useNewDiaryEntry from 'hooks/useNewDiaryEntry';
import styles from './styles';

const NewSymptomsEntry = ({
  route: {
    params: { answers },
  },
}) => {
  const dispatch = useDispatch();
  useNewDiaryEntry();

  const onPress = ({ fecha, ...newEntryInfo }) => {
    dispatch(
      sendDiaryEntry({
        ...newEntryInfo,
        fecha: changeToBackendFormat(fecha),
        respuestas: answers,
      }),
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAwareScrollView style={styles.container} keyboardShouldPersistTaps="always">
        <DiaryForm onSubmit={onPress} />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

NewSymptomsEntry.propTypes = {
  route: shape({
    params: shape({
      answers: diaryAnswers,
    }),
  }),
};

export default NewSymptomsEntry;
