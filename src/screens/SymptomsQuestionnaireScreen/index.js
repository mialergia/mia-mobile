import React from 'react';
import strings from 'locale';
import { SafeAreaView } from 'react-navigation';
import { useSelector } from 'react-redux';
import { shape, number, func } from 'prop-types';

import SymptomsQuestionnaireForm from 'components/SymptomsQuestionnaireForm';
import studentIcon from 'images/student.png';
import Header from 'components/common/Header';
import { WHITE } from 'constants/styles';
import styles from './styles';

const SymptomsQuestionnaireScreen = ({
  route: {
    params: { questionType, nextScreen },
  },
}) => {
  const genericQuestions = useSelector(
    ({ symptoms: { genericQuestions } }) => genericQuestions || [],
    [],
  );
  const { sintomas } = genericQuestions.find(question => question.identificador === questionType);

  return (
    <SafeAreaView style={styles.container} forceInset={{ top: 'never' }}>
      <Header
        title={strings.ONBOARDING_QUESTIONS.selectSymptoms}
        icon={studentIcon}
        arrowColor={WHITE}
      />
      <SymptomsQuestionnaireForm onSubmit={nextScreen} subQuestions={sintomas} />
    </SafeAreaView>
  );
};

SymptomsQuestionnaireScreen.propTypes = {
  route: shape({
    params: shape({
      questionNumber: number.isRequired,
      nextScreen: func.isRequired,
    }),
  }),
};

export default SymptomsQuestionnaireScreen;
