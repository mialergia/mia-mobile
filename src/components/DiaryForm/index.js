import React from 'react';
import { func } from 'prop-types';
import { View, Text } from 'react-native';
import { useStatus, LOADING } from '@rootstrap/redux-tools';

import Input from 'components/common/Input';
import Button from 'components/common/Button';
import useForm from 'hooks/useForm';
import useValidation from 'hooks/useValidation';
import ErrorView from 'components/common/ErrorView';
import useTextInputProps from 'hooks/useTextInputProps';
import strings from 'locale';
import DateInput from 'components/common/DateInput';
import CurrentLocation from 'components/common/CurrentLocation';
import { sendDiaryEntry } from 'actions/symptomsActions';
import diaryEntryValidations from 'validations/diaryEntryValidations';
import { todaysDate } from 'utils/dateHelpers';
import styles from './styles';

const FIELDS = {
  date: 'fecha',
  coordinates: 'coordenadas',
  comment: 'comentario',
};

const DiaryForm = ({ onSubmit }) => {
  const { error, status } = useStatus(sendDiaryEntry);
  const validator = useValidation(diaryEntryValidations);
  const { values, errors, handleValueChange, handleSubmit, handleBlur } = useForm(
    {
      initialValues: { [FIELDS.date]: todaysDate },
      onSubmit,
      validator,
      validateOnBlur: false,
    },
    [onSubmit],
  );

  const inputProps = useTextInputProps(handleValueChange, handleBlur, values);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{strings.DIARY_ENTRY.dateQuestion}</Text>
      <DateInput
        placeholder={strings.DIARY_ENTRY.dateInput}
        handleValueChange={handleValueChange}
        inputName={FIELDS.date}
        date={values[FIELDS.date]}
      />
      <Text style={styles.title}>{strings.DIARY_ENTRY.otherComment}</Text>
      <Input
        inputContainerStyle={styles.otherCommentContainer}
        inputStyle={styles.otherCommentInput}
        multiline
        blurOnSubmit
        height={250}
        {...inputProps(FIELDS.comment)}
      />
      <CurrentLocation inputName={FIELDS.coordinates} handleValueChange={handleValueChange} />
      <ErrorView errors={{ ...errors, error }} />
      <Button
        containerStyle={styles.button}
        title={strings.DIARY_ENTRY.button}
        onPress={handleSubmit}
        loading={status === LOADING}
      />
    </View>
  );
};

DiaryForm.propTypes = {
  onSubmit: func.isRequired,
};

export default DiaryForm;
