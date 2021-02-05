import React from 'react';
import { func } from 'prop-types';
import { View } from 'react-native';
import { useStatus, LOADING } from '@rootstrap/redux-tools';
import strings from 'locale';

import { resetPassword } from 'actions/userActions';
import Input from 'components/common/Input';
import Button from 'components/common/Button';
import useForm from 'hooks/useForm';
import useValidation from 'hooks/useValidation';
import ErrorView from 'components/common/ErrorView';
import useTextInputProps from 'hooks/useTextInputProps';
import resetPasswordValidation from 'validations/resetPasswordValidation';
import styles from './styles';

const FIELDS = {
  email: 'email',
};

const ResetPasswordForm = ({ onSubmit }) => {
  const { error, status } = useStatus(resetPassword);
  const validator = useValidation(resetPasswordValidation);
  const { values, errors, handleValueChange, handleSubmit, handleBlur } = useForm(
    {
      onSubmit,
      validator,
      validateOnBlur: false,
    },
    [onSubmit],
  );

  const inputProps = useTextInputProps(handleValueChange, handleBlur, values);

  return (
    <View style={styles.container}>
      <Input
        placeholder={strings.RESET_PASSWORD.email}
        keyboardType="email-address"
        autoCapitalize="none"
        testID="email-input"
        {...inputProps(FIELDS.email)}
      />
      <View>
        <ErrorView errors={{ ...errors, error }} />
        <Button
          containerStyle={styles.buttonContainer}
          title={strings.RESET_PASSWORD.button}
          onPress={handleSubmit}
          loading={status === LOADING}
        />
      </View>
    </View>
  );
};

ResetPasswordForm.propTypes = {
  onSubmit: func.isRequired,
};

export default ResetPasswordForm;
