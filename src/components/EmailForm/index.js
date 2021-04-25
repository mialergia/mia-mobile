import React from 'react';
import { func, string } from 'prop-types';
import { View } from 'react-native';
import { useStatus, LOADING } from '@rootstrap/redux-tools';
import strings from 'locale';

import Input from 'components/common/Input';
import Button from 'components/common/Button';
import useForm from 'hooks/useForm';
import useValidation from 'hooks/useValidation';
import ErrorView from 'components/common/ErrorView';
import useTextInputProps from 'hooks/useTextInputProps';
import emailValidation from 'validations/emailValidation';
import styles from './styles';

const FIELDS = {
  email: 'email',
};

const EmailForm = ({ onSubmit, buttonTitle, emailAdded = null, action }) => {
  const { error, status } = useStatus(action);
  const validator = useValidation(emailValidation);
  const { values, errors, handleValueChange, handleSubmit, handleBlur } = useForm(
    {
      onSubmit,
      validator,
      validateOnBlur: false,
      initialValues: { [FIELDS.email]: emailAdded },
    },
    [onSubmit],
  );

  const inputProps = useTextInputProps(handleValueChange, handleBlur, values);

  return (
    <View style={styles.container}>
      <Input
        placeholder={strings.COMMON.email}
        keyboardType="email-address"
        autoCapitalize="none"
        testID="email-input"
        {...inputProps(FIELDS.email)}
      />
      <View>
        <ErrorView errors={{ ...errors, error }} />
        <Button
          containerStyle={styles.buttonContainer}
          title={buttonTitle}
          onPress={handleSubmit}
          loading={status === LOADING}
        />
      </View>
    </View>
  );
};

EmailForm.propTypes = {
  onSubmit: func.isRequired,
  buttonTitle: string.isRequired,
  emailAdded: string,
  action: func.isRequired,
};

export default EmailForm;
