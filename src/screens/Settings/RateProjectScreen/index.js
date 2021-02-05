import React from 'react';
import { Text, Linking, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import strings from 'locale';

import BackButton from 'components/common/BackButton';
import TouchableText from 'components/common/TouchableText';
import styles from './styles';

const SURVEY_LINK =
  'https://docs.google.com/forms/d/e/1FAIpQLScWDG5d8vTF3U2KPF8oukWm6RjSPpIDZ3jjFVmWd0k80dLnQw/viewform?usp=sf_link';

const RateProjectScreen = () => (
  <SafeAreaView style={styles.container}>
    <BackButton />
    <Text style={styles.screenTitle}>{strings.SETTINGS_SCREEN.rateApp}</Text>
    <ScrollView showsVerticalScrollIndicator={false}>
      <Text style={styles.text}>{strings.SETTINGS_SCREEN.rateAppDescription}</Text>
      <TouchableText
        textStyle={styles.linkText}
        text={strings.SETTINGS_SCREEN.startSurvey}
        onPress={() => Linking.openURL(SURVEY_LINK)}
      />
    </ScrollView>
  </SafeAreaView>
);

export default RateProjectScreen;
