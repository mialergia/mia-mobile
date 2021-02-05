import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import strings from 'locale';

import BackButton from 'components/common/BackButton';
import Loading from 'components/common/Loading';
import Error from 'components/common/Error';
import useTermsAndConditions from 'hooks/useTermsAndConditions';
import { ScrollView } from 'react-native-gesture-handler';
import styles from './styles';

const ProjectInfoSceen = () => {
  const { termsConditions, loading, error } = useTermsAndConditions();

  if (error) {
    return <Error errorMessage={error} />;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <BackButton />
      <Text style={styles.screenTitle}>{strings.SETTINGS_SCREEN.aboutSection}</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.text}>{termsConditions}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

ProjectInfoSceen.navigationOptions = {
  title: strings.SETTINGS_SCREEN.title,
};

export default ProjectInfoSceen;
