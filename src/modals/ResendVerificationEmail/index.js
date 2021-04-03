import React, { useCallback, useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import strings from 'locale';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SUCCESS, useStatus } from '@rootstrap/redux-tools';
import { object, string } from 'prop-types';

import DeepLink from 'components/DeepLink';
import { resendVerificationEmail } from 'actions/userActions';
import EmailForm from 'components/EmailForm';
import CloseButton from 'components/common/CloseButton';
import { EMAIL_SENT_MODAL } from 'constants/screens';
import { routeShape } from 'constants/shapes';
import styles from './styles';

const ResendVerificationEmail = ({
  navigation,
  route: {
    params: { emailAdded },
  },
}) => {
  const [email, setEmail] = useState({});

  const dispatch = useDispatch();
  const { status } = useStatus(resendVerificationEmail);

  useEffect(() => {
    if (status === SUCCESS) {
      navigation.goBack();
      navigation.navigate(EMAIL_SENT_MODAL, {
        ...email,
        actionText: strings.SIGN_UP.emailAction,
        resendAction: resendVerificationEmail,
      });
      return () => dispatch(resendVerificationEmail.reset());
    }
  }, [dispatch, email, navigation, status]);

  const onSubmit = useCallback(
    email => {
      setEmail(email);
      dispatch(resendVerificationEmail(email));
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
        <Text style={styles.title}>{strings.RESEND_VERIFICATION_EMAIL.title}</Text>
        <EmailForm
          onSubmit={onSubmit}
          buttonTitle={strings.RESEND_VERIFICATION_EMAIL.button}
          emailAdded={emailAdded}
          action={resendVerificationEmail}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

ResendVerificationEmail.propTypes = {
  navigation: object.isRequired,
  emailAdded: string,
  route: routeShape({
    emailAdded: string,
  }),
};

export default ResendVerificationEmail;
