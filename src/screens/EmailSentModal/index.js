import React, { useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { func, object, string } from 'prop-types';
import strings from 'locale';
import { useDispatch } from 'react-redux';
import { useLoading } from '@rootstrap/redux-tools';

import Button from 'components/common/Button';
import DeepLink from 'components/DeepLink';
import paperPlane from 'images/paperPlane.png';
import { routeShape } from 'constants/shapes';
import LinkText from 'components/common/LinkText';
import Loading from 'components/common/Loading';
import styles from './styles';

const EmailSentModal = ({
  navigation,
  route: {
    params: { email, actionText, resetAction, resendAction = false },
  },
}) => {
  const dispatch = useDispatch();
  const loading = useLoading(resendAction);

  useEffect(
    () => () => {
      resetAction && resetAction();
      resendAction && dispatch(resendAction.reset());
    },
    [dispatch, resendAction, resetAction],
  );

  return (
    <View style={styles.container}>
      <DeepLink />
      <Text style={styles.title}>{strings.EMAIL_SENT.emailSentTitle}</Text>
      <Text style={styles.description}>
        {strings.EMAIL_SENT.emailSent}
        <Text style={styles.mail}>{`${email} \n`}</Text>
        <Text>{strings.EMAIL_SENT.emailSentDescription}</Text>
        <Text>{actionText}</Text>
      </Text>
      <Image style={styles.image} source={paperPlane} resizeMode="contain" />
      <Button title={strings.COMMON.accept} onPress={() => navigation.goBack()} />
      {resendAction &&
        (loading ? (
          <Loading size="small" containerStyle={styles.loader} />
        ) : (
          <LinkText
            onPress={() => dispatch(resendAction({ email }))}
            text={strings.EMAIL_SENT.resend}
            containerStyle={styles.resendEmail}
          />
        ))}
    </View>
  );
};

EmailSentModal.propTypes = {
  navigation: object.isRequired,
  route: routeShape({
    email: string.isRequired,
    resetAction: func,
    resendAction: func,
  }),
};

export default EmailSentModal;
