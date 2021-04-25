import React, { memo, useCallback, useState } from 'react';
import { Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import strings from 'locale';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { string } from 'prop-types';

import DeepLink from 'components/DeepLink';
import { resetPassword } from 'actions/userActions';
import EmailForm from 'components/EmailForm';
import useResetPassword from 'hooks/useResetPassword';
import CloseButton from 'components/common/CloseButton';
import { routeShape } from 'constants/shapes';
import styles from './styles';

const ResetPasswordModal = ({
  route: {
    params: { emailAdded },
  },
}) => {
  const [email, setEmail] = useState({});

  const dispatch = useDispatch();
  useResetPassword(email);

  const onSubmit = useCallback(
    email => {
      setEmail(email);
      dispatch(resetPassword(email));
    },
    [dispatch],
  );

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.scrollview}
      keyboardShouldPersistTaps="always">
      <View style={styles.container}>
        <DeepLink />
        <CloseButton containerStyle={styles.closeButton} />
        <Text style={styles.title}>{strings.RESET_PASSWORD.title}</Text>
        <EmailForm
          onSubmit={onSubmit}
          buttonTitle={strings.RESET_PASSWORD.button}
          emailAdded={emailAdded}
          action={resetPassword}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

ResetPasswordModal.propTypes = {
  route: routeShape({
    emailAdded: string,
  }),
};

export default memo(ResetPasswordModal);
