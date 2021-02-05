import React from 'react';
import { func } from 'prop-types';
import { View, FlatList } from 'react-native';
import { useStatus, LOADING } from '@rootstrap/redux-tools';

import { login } from 'actions/userActions';
import Button from 'components/common/Button';
import inhalerIcon from 'images/inhaler.png';
import useForm from 'hooks/useForm';
import ErrorView from 'components/common/ErrorView';
import strings from 'locale';
import SelectInput from 'components/common/SelectInput';
import { subQuestionsArray } from 'constants/shapes';
import { INHALER_TITLE } from 'constants/app';
import styles from './styles';

const SymptomsQuestionnaireForm = ({ onSubmit, subQuestions }) => {
  const { error, status } = useStatus(login);
  const { values, errors, handleValueChange, handleSubmit } = useForm(
    {
      onSubmit,
      validateOnBlur: false,
    },
    [onSubmit],
  );

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.flatList}
        keyExtractor={({ title }, index) => `${index}-${title}`}
        renderItem={({ item, item: { id, nombre } }) => (
          <SelectInput
            question={item}
            handleValueChange={handleValueChange}
            isChecked={!!values[id]}
            icon={nombre === INHALER_TITLE && inhalerIcon}
          />
        )}
        data={subQuestions}
      />
      <ErrorView errors={{ ...errors, error }} />
      <Button
        containerStyle={styles.button}
        title={strings.COMMON.continue}
        loading={status === LOADING}
        onPress={handleSubmit}
      />
    </View>
  );
};

SymptomsQuestionnaireForm.propTypes = {
  onSubmit: func.isRequired,
  subQuestions: subQuestionsArray.isRequired,
};

export default SymptomsQuestionnaireForm;
