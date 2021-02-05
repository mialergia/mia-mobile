import React, { useCallback } from 'react';
import { SafeAreaView, View, Text, Image } from 'react-native';
import { string, bool } from 'prop-types';

import strings from 'locale';
import error from 'images/error.png';
import BackButton from 'components/common/BackButton';
import TouchableText from 'components/common/TouchableText';
import { useDispatch } from 'react-redux';
import { logout } from 'actions/userActions';
import styles from './styles';

const Error = ({ errorMessage, backbutton = true, logoutButton = false }) => {
  const dispatch = useDispatch();
  const logoutRequest = useCallback(() => dispatch(logout()), [dispatch]);

  return (
    <SafeAreaView style={styles.container}>
      {backbutton && <BackButton containerStyle={styles.backbutton} />}
      <View style={styles.errorContainer}>
        <Image style={styles.image} source={error} />
        <Text style={styles.text}>{errorMessage}</Text>
      </View>
      {logoutButton && (
        <TouchableText text={strings.SETTINGS_SCREEN.logout} onPress={logoutRequest} />
      )}
    </SafeAreaView>
  );
};

Error.propTypes = {
  errorMessage: string.isRequired,
  backbutton: bool,
  logoutButton: bool,
};

export default Error;
