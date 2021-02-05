import React, { memo } from 'react';
import { View, SafeAreaView, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import strings from 'locale';
import { bool } from 'prop-types';

import Header from 'components/common/Header';
import Error from 'components/common/Error';
import BackButton from 'components/common/BackButton';
import PersonalInfoForm from 'components/PersonalInfoForm';
import { updateUserInfo } from 'actions/userActions';
import { changeToBackendFormat } from 'utils/dateHelpers';
import Loading from 'components/common/Loading';
import usePersonalInfo from 'hooks/usePersonalInfo';
import { capital } from 'constants/data';
import { routeShape } from 'constants/shapes';
import { getUserAllergies } from 'utils/helpers';
import styles from './styles';

const PersonalInfo = ({ route: { params: { fromOnboarding = false } = {} } }) => {
  const {
    loading,
    allergies: { all, filteredAllergies },
    error,
    user,
  } = usePersonalInfo(fromOnboarding);

  const dispatch = useDispatch();

  const onSendPersonalInfo = ({
    fechaNacimiento,
    alergias,
    barrio,
    departamento,
    ...personalInfo
  }) => {
    dispatch(
      updateUserInfo({
        ...personalInfo,
        fechaNacimiento: changeToBackendFormat(fechaNacimiento),
        departamento,
        barrio: departamento === capital ? barrio : '',
        alergias: getUserAllergies(alergias, all),
      }),
    );
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error errorMessage={error} backbutton={false} />;
  }

  const Container = fromOnboarding ? View : SafeAreaView;

  return (
    <Container style={styles.background}>
      {fromOnboarding ? (
        <Header
          title={strings.PERSONAL_INFO.title}
          textStyle={styles.headerText}
          backButton={false}
        />
      ) : (
        <View style={styles.titleContainer}>
          <BackButton />
          <Text style={styles.screenTitle}>{strings.SETTINGS_SCREEN.personalInfoSection}</Text>
        </View>
      )}
      <SafeAreaView style={styles.container}>
        <PersonalInfoForm
          allergies={filteredAllergies}
          onSubmit={onSendPersonalInfo}
          savedUser={user}
          fromOnboarding={fromOnboarding}
        />
      </SafeAreaView>
    </Container>
  );
};

PersonalInfo.propTypes = {
  route: routeShape({
    fromOnboarding: bool,
  }),
};

export default memo(PersonalInfo);
