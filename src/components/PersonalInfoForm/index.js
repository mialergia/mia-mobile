import React from 'react';
import { arrayOf, bool, func } from 'prop-types';
import { View } from 'react-native';
import { useStatus, LOADING } from '@rootstrap/redux-tools';
import strings from 'locale';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { isEqual } from 'lodash';

import { updateUserInfo } from 'actions/userActions';
import Input from 'components/common/Input';
import DateInput from 'components/common/DateInput';
import Button from 'components/common/Button';
import useForm from 'hooks/useForm';
import useValidation from 'hooks/useValidation';
import ErrorView from 'components/common/ErrorView';
import useTextInputProps from 'hooks/useTextInputProps';
import personalInfoValidations from 'validations/personalInfoValidations';
import GenericPicker from 'components/common/GenericPicker';
import DropdownMultiSelect from 'components/common/DropdownMultiSelect';
import { gendersLabels, departmentsLabels, zonesLabels } from 'utils/helpers';
import { capital } from 'constants/data';
import { allergiesShape, userShape } from 'constants/shapes';
import styles from './styles';

const FIELDS = {
  name: 'nombre',
  department: 'departamento',
  zone: 'barrio',
  dateOfBirth: 'fechaNacimiento',
  gender: 'sexo',
  allergies: 'alergias',
};

const PersonalInfoForm = ({ allergies, onSubmit, savedUser, fromOnboarding }) => {
  const { error, status } = useStatus(updateUserInfo);
  const validator = useValidation(personalInfoValidations);
  const { values, errors, handleValueChange, handleSubmit, handleBlur } = useForm(
    {
      initialValues: savedUser,
      onSubmit,
      validator,
      validateOnBlur: false,
    },
    [onSubmit],
  );

  const inputProps = useTextInputProps(handleValueChange, handleBlur, values);

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.contentContainer}
      keyboardShouldPersistTaps="always">
      <View>
        <Input
          autoCapitalize="words"
          placeholder={strings.PERSONAL_INFO.name}
          {...inputProps(FIELDS.name)}
        />
        <GenericPicker
          inputName={FIELDS.gender}
          items={gendersLabels}
          placeholderLabel={strings.PERSONAL_INFO.selectGender}
          handleValueChange={handleValueChange}
          value={values[FIELDS.gender]}
        />
        <DateInput
          inputName={FIELDS.dateOfBirth}
          date={values[FIELDS.dateOfBirth]}
          handleValueChange={handleValueChange}
        />
        <GenericPicker
          inputName={FIELDS.department}
          items={departmentsLabels}
          placeholderLabel={strings.PERSONAL_INFO.department}
          handleValueChange={handleValueChange}
          value={values[FIELDS.department]}
        />
        {values?.departamento === capital && (
          <GenericPicker
            inputName={FIELDS.zone}
            items={zonesLabels}
            placeholderLabel={strings.PERSONAL_INFO.zone}
            handleValueChange={handleValueChange}
            value={values[FIELDS.zone]}
          />
        )}
        <DropdownMultiSelect
          inputName={FIELDS.allergies}
          items={allergies}
          selectedItems={values[FIELDS.allergies]}
          handleValueChange={handleValueChange}
        />
      </View>
      <View>
        <ErrorView errors={{ ...errors, error }} />
        <Button
          title={strings.COMMON.send}
          onPress={handleSubmit}
          loading={status === LOADING}
          disabled={!fromOnboarding && isEqual(savedUser, values)}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

PersonalInfoForm.propTypes = {
  onSubmit: func.isRequired,
  allergies: arrayOf(allergiesShape),
  savedUser: userShape,
  fromOnboarding: bool.isRequired,
};

export default PersonalInfoForm;
