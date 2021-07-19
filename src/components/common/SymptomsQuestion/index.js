import React, { memo } from 'react';
import { View, Image, SafeAreaView, Text } from 'react-native';
import { getGenericQuestionImage } from 'utils/helpers';

import BackButton from 'components/common/BackButton';
import Button from 'components/common/Button';
import ProgressDots from 'components/common/ProgressDots';
import strings from 'locale';
import onboardingBubble from 'images/onboardingBubble.png';
import { bool, func, string } from 'prop-types';
import { useSelector } from 'react-redux';
import { ONBOARDING_STEPS_NUMBER } from 'constants/app';
import styles from './styles';

const SymptomsQuestion = ({ questionType, onPressNo, onPressYes, backButton = true }) => {
  const genericQuestions = useSelector(
    ({ symptoms: { genericQuestions } }) => genericQuestions || [],
    [],
  );

  const { pregunta } = genericQuestions.find(question => question.identificador === questionType);
  const index = genericQuestions.findIndex(question => question.identificador === questionType);
  const image = getGenericQuestionImage(questionType);

  return (
    <SafeAreaView style={styles.container}>
      {backButton && <BackButton containerStyle={styles.backButton} />}
      <View style={styles.scrollContainer}>
        <View>
          <View style={styles.imagesContainer}>
            <Image source={onboardingBubble} />
            <Image style={styles.icon} source={image} />
          </View>
          <Text style={styles.question}>{pregunta}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title={strings.COMMON.negation}
            inverseStyle
            containerStyle={styles.button}
            textStyle={styles.buttonText}
            onPress={onPressNo}
          />
          <Button
            title={strings.COMMON.confirmation}
            containerStyle={styles.button}
            textStyle={styles.buttonText}
            onPress={onPressYes}
          />
        </View>
        <ProgressDots activeNumber={index} maxNumber={ONBOARDING_STEPS_NUMBER} />
      </View>
    </SafeAreaView>
  );
};

SymptomsQuestion.propTypes = {
  questionType: string.isRequired,
  onPressYes: func.isRequired,
  onPressNo: func.isRequired,
  backButton: bool,
};

export default memo(SymptomsQuestion);
