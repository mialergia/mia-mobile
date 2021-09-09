/* eslint-disable react/no-multi-comp */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';
import * as StoreReview from 'react-native-store-review';

import {
  SYMPTOMS_QUESTIONNAIRE,
  NOSE_QUESTIONS,
  EYES_QUESTIONS,
  COUGH_QUESTIONS,
  PERSONAL_INFO,
  NEW_SYMPTOMS_ENTRY,
  SYMPTOMS_SURVEY,
  BOTTOM_TABS,
  POLLEN_DETAIL_SCREEN,
  DIARY_DETAIL_SCREEN,
  ALERT,
  NOTIFICATIONS_SCREEN,
  PROJECT_INFO_SCREEN,
  RATE_PROJECT_SCREEN,
  PDFS_SCREEN,
  PDF_VIEWER,
} from 'constants/screens';
import NoseQuestions from 'screens/Onboarding/NoseQuestions';
import useSession from 'hooks/useSession';
import SymptomsQuestionnaireScreen from 'screens/SymptomsQuestionnaireScreen';
import EyesQuestions from 'screens/Onboarding/EyesQuestions';
import CoughQuestions from 'screens/Onboarding/CoughQuestions';
import PersonalInfo from 'screens/PersonalInfo';
import NewSymptomsEntry from 'screens/SymptomsDiary/NewSymptomsEntry';
import SymptomsSurvey from 'screens/SymptomsDiary/SymptomsSurvey';
import PollenDetailsScreen from 'screens/PollenDetailsScreen';
import DiaryDetailScreen from 'screens/DiaryDetailScreen';
import Alert from 'components/common/Alert';
import NotificationsScreen from 'screens/Settings/NotificationsScreen';
import ProjectInfoSceen from 'screens/Settings/ProjectInfoScreen';
import RateProjectScreen from 'screens/Settings/RateProjectScreen';
import PdfsScreen from 'screens/Settings/PdfsScreen';
import PdfViewer from 'screens/PdfViewer';
import BottomTabs from './BottomTabs';
import styles from './styles';

const Stack = createStackNavigator();

if (StoreReview.isAvailable) {
  // This API is only available on iOS >= 10.3 or Android API >= 21
  StoreReview.requestReview();
}
const AppStack = () => {
  const {
    user: { necesitaOnboarding, nombre },
  } = useSession();

  return necesitaOnboarding ? (
    <Stack.Navigator screenOptions={{ cardStyle: styles.navigatorStyle, headerShown: false }}>
      {!nombre && (
        <Stack.Screen
          name={PERSONAL_INFO}
          component={PersonalInfo}
          initialParams={{ fromOnboarding: true }}
        />
      )}
      <Stack.Screen
        name={NOSE_QUESTIONS}
        component={NoseQuestions}
        options={{ gestureEnabled: false }}
      />
      <Stack.Screen name={EYES_QUESTIONS} component={EyesQuestions} />
      <Stack.Screen name={COUGH_QUESTIONS} component={CoughQuestions} />
      <Stack.Screen name={SYMPTOMS_QUESTIONNAIRE} component={SymptomsQuestionnaireScreen} />
    </Stack.Navigator>
  ) : (
    <ActionSheetProvider>
      <Stack.Navigator
        screenOptions={{
          cardStyle: styles.navigatorStyle,
          headerShown: false,
        }}>
        <Stack.Screen name={BOTTOM_TABS} component={BottomTabs} />
        <Stack.Screen name={NEW_SYMPTOMS_ENTRY} component={NewSymptomsEntry} />
        <Stack.Screen name={SYMPTOMS_SURVEY} component={SymptomsSurvey} />
        <Stack.Screen name={POLLEN_DETAIL_SCREEN} component={PollenDetailsScreen} />
        <Stack.Screen name={DIARY_DETAIL_SCREEN} component={DiaryDetailScreen} />
        <Stack.Screen name={NOTIFICATIONS_SCREEN} component={NotificationsScreen} />
        <Stack.Screen name={PDFS_SCREEN} component={PdfsScreen} />
        <Stack.Screen name={PERSONAL_INFO} component={PersonalInfo} />
        <Stack.Screen name={PROJECT_INFO_SCREEN} component={ProjectInfoSceen} />
        <Stack.Screen name={RATE_PROJECT_SCREEN} component={RateProjectScreen} />
        <Stack.Screen name={PDF_VIEWER} component={PdfViewer} />
      </Stack.Navigator>
    </ActionSheetProvider>
  );
};

const RootStack = createStackNavigator();

const RootAuthStack = () => (
  <RootStack.Navigator
    mode="modal"
    screenOptions={{ cardStyle: { backgroundColor: 'transparent' }, headerShown: false }}>
    <RootStack.Screen name="App" component={AppStack} options={{ headerShown: false }} />
    <RootStack.Screen name={ALERT} component={Alert} />
  </RootStack.Navigator>
);

export default RootAuthStack;
