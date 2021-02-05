import React from 'react';
import { func } from 'prop-types';
import { View } from 'react-native';
import { useStatus, LOADING } from '@rootstrap/redux-tools';

import { signUp } from 'actions/userActions';
import Input from 'components/common/Input';
import strings from 'locale';
import useForm from 'hooks/useForm';
import useValidation from 'hooks/useValidation';
import useTextInputProps from 'hooks/useTextInputProps';
import signUpValidations from 'validations/signUpValidations';
import ErrorView from 'components/common/ErrorView';
import Button from 'components/common/Button';
import styles, { buttonContainerStyle } from './styles';

const FIELDS = {
  email: 'email',
  password1: 'password1',
  password2: 'password2',
};

const SignUpForm = ({ onSubmit }) => {
  const { error, status } = useStatus(signUp);
  const validator = useValidation(signUpValidations);
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
      <View>
        <Input
          placeholder={strings.SIGN_UP.email}
          label={strings.SIGN_UP.email}
          keyboardType="email-address"
          autoCapitalize="none"
          testID="email-input"
          {...inputProps(FIELDS.email)}
        />
        <Input
          placeholder={strings.SIGN_UP.password}
          label={strings.SIGN_UP.password}
          secureTextEntry
          testID="password-input"
          {...inputProps(FIELDS.password1)}
        />
        <Input
          placeholder={strings.SIGN_UP.passwordConfirmation}
          label={strings.SIGN_UP.passwordConfirmation}
          secureTextEntry
          testID="confirm-password-input"
          {...inputProps(FIELDS.password2)}
        />
      </View>
      <View>
        <ErrorView errors={{ ...errors, error }} />
        <Button
          containerStyle={buttonContainerStyle}
          title={strings.COMMON.continue}
          onPress={handleSubmit}
          loading={status === LOADING}
        />
      </View>
    </View>
  );
};

SignUpForm.propTypes = {
  onSubmit: func.isRequired,
};

export default SignUpForm;
