import React from 'react';
import { func } from 'prop-types';
import { View } from 'react-native';
import { useStatus, LOADING } from '@rootstrap/redux-tools';

import { login } from 'actions/userActions';
import Input from 'components/common/Input';
import Button from 'components/common/Button';
import LinkText from 'components/common/LinkText';
import useForm from 'hooks/useForm';
import useValidation from 'hooks/useValidation';
import loginValidations from 'validations/loginValidations';
import ErrorView from 'components/common/ErrorView';
import useTextInputProps from 'hooks/useTextInputProps';
import strings from 'locale';
import { useNavigation } from '@react-navigation/native';
import { RESET_PASSWORD_MODAL } from 'constants/screens';
import styles from './styles';

const FIELDS = {
  email: 'email',
  password: 'password',
};

const LoginForm = ({ onSubmit }) => {
  const navigation = useNavigation();
  const { error, status } = useStatus(login);
  const validator = useValidation(loginValidations);
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
        placeholder={strings.LOG_IN.email}
        keyboardType="email-address"
        autoCapitalize="none"
        testID="email-input"
        {...inputProps(FIELDS.email)}
      />
      <Input
        placeholder={strings.LOG_IN.password}
        testID="password-input"
        secureTextEntry
        {...inputProps(FIELDS.password)}
      />
      <ErrorView errors={{ ...errors, error }} />
      <LinkText
        onPress={() => navigation.navigate(RESET_PASSWORD_MODAL)}
        text={strings.LOG_IN.resetPasswordButton}
      />
      <Button
        containerStyle={styles.buttonContainer}
        title={strings.LOG_IN.logInButton}
        onPress={handleSubmit}
        loading={status === LOADING}
      />
    </View>
  );
};

LoginForm.propTypes = {
  onSubmit: func.isRequired,
};

export default LoginForm;
