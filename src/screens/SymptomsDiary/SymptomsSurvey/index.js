import React, { useState } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { object } from 'prop-types';

import AnswersButton from 'components/common/AnswersButton';
import ProgressDots from 'components/common/ProgressDots';
import { NEW_SYMPTOMS_ENTRY } from 'constants/screens';
import useDiaryQuestions from 'hooks/useDiaryQuestions';
import Loading from 'components/common/Loading';
import Error from 'components/common/Error';
import BackButton from 'components/common/BackButton';
import styles from './styles';

const SymptomsSurvey = ({ navigation }) => {
  const { questions, loading, error } = useDiaryQuestions();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const { id, pregunta, respuestas } = questions[step] || [];
  const maxStep = questions.length;

  const onNextQuestion = respuesta => {
    setAnswers([...answers, { pregunta: id, respuesta }]);
    if (step < maxStep - 1) {
      setStep(step + 1);
    } else {
      navigation.navigate(NEW_SYMPTOMS_ENTRY, { answers });
    }
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error errorMessage={error} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <BackButton />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{pregunta}</Text>
      </View>
      <View style={styles.answersContainer}>
        <AnswersButton onPress={onNextQuestion} answers={respuestas} />
      </View>
      <ProgressDots containerStyle={styles.progressDots} activeNumber={step} maxNumber={maxStep} />
    </SafeAreaView>
  );
};

SymptomsSurvey.propTypes = {
  navigation: object.isRequired,
};

export default SymptomsSurvey;
