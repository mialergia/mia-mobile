import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';
import { object, shape, string } from 'prop-types';
import strings from 'locale';

import Button from 'components/common/Button';
import PopUp from 'components/common/PopUp';
import Loading from 'components/common/Loading';
import ErrorView from 'components/common/ErrorView';
import { signUp } from 'actions/userActions';
import { routeShape } from 'constants/shapes';
import useTermsAndConditions from 'hooks/useTermsAndConditions';
import styles from './styles';

const TermsAndConditions = ({
  navigation,
  route: {
    params: { user },
  },
}) => {
  const dispatch = useDispatch();
  const { termsConditions, loading, error, onesignalPlayerId } = useTermsAndConditions();

  const registerUser = () => {
    dispatch(signUp({ ...user, onesignalPlayerId }));
    navigation.goBack();
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <PopUp>
      <ScrollView contentContainerStyle={styles.container}>
        <View>
          <Text style={styles.title}>{strings.SIGN_UP.termsAndConditionsTitle}</Text>
          <Text style={styles.description}>{termsConditions}</Text>
        </View>
        {error && <ErrorView errors={{ error }} />}
        <View>
          {!error && (
            <Button
              containerStyle={styles.registerButton}
              title={strings.SIGN_UP.signUpButton}
              onPress={registerUser}
            />
          )}
          <Button
            containerStyle={styles.cancelButton}
            title={strings.COMMON.cancel}
            inverseStyle
            onPress={() => navigation.goBack()}
          />
        </View>
      </ScrollView>
    </PopUp>
  );
};

TermsAndConditions.propTypes = {
  navigation: object.isRequired,
  route: routeShape({
    user: shape({
      email: string.isRequired,
      password1: string.isRequired,
      password2: string.isRequired,
    }),
  }),
};

export default TermsAndConditions;
