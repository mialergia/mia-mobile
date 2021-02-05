import React, { memo } from 'react';
import { View } from 'react-native';

import SymptomsQuestion from 'components/common/SymptomsQuestion';
import { useDispatch } from 'react-redux';
import { SYMPTOMS_QUESTIONNAIRE } from 'constants/screens';
import { object, shape } from 'prop-types';
import { generiQuestionsTypes } from 'constants/data';
import { sendSymptomsEvent } from 'actions/symptomsActions';
import Loading from 'components/common/Loading';
import useOnboardingSymptoms from 'hooks/useOnboardingSymptoms';
import ErrorView from 'components/common/ErrorView';
import styles from './styles';

const CoughQuestions = ({
  navigation,
  route: {
    params: { symptomsAdded },
  },
}) => {
  const dispatch = useDispatch();
  const { error, loading } = useOnboardingSymptoms();

  const sendSymptoms = symptoms => {
    const symptomsToSend = { ...symptomsAdded, ...symptoms };
    dispatch(sendSymptomsEvent({ sintomas: symptomsToSend }));
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <SymptomsQuestion
        questionType={generiQuestionsTypes.COUGH}
        onPressNo={() => sendSymptoms({})}
        onPressYes={() =>
          navigation.push(SYMPTOMS_QUESTIONNAIRE, {
            questionType: generiQuestionsTypes.COUGH,
            nextScreen: sendSymptoms,
          })
        }
      />
      <ErrorView errors={{ error }} />
    </View>
  );
};

CoughQuestions.propTypes = {
  navigation: object,
  route: shape({
    params: shape({
      symptoms: object,
    }),
  }),
};

export default memo(CoughQuestions);
