import React, { useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { func, object, string } from 'prop-types';
import strings from 'locale';

import Button from 'components/common/Button';
import DeepLink from 'components/DeepLink';
import paperPlane from 'images/paperPlane.png';
import { routeShape } from 'constants/shapes';
import styles from './styles';

const EmailSentModal = ({
  navigation,
  route: {
    params: { email, actionText, resetAction },
  },
}) => {
  useEffect(() => () => resetAction && resetAction());

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
      <Button
        style={styles.button}
        title={strings.COMMON.accept}
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

EmailSentModal.propTypes = {
  navigation: object.isRequired,
  route: routeShape({
    email: string.isRequired,
    resetAction: func,
  }),
};

export default EmailSentModal;
