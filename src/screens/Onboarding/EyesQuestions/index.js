import React, { memo } from 'react';
import { object, shape } from 'prop-types';

import SymptomsQuestion from 'components/common/SymptomsQuestion';
import { COUGH_QUESTIONS, SYMPTOMS_QUESTIONNAIRE } from 'constants/screens';
import { generiQuestionsTypes } from 'constants/data';

const EyesQuestions = ({
  navigation,
  route: {
    params: { symptomsAdded },
  },
}) => {
  const nextScreen = symptoms => {
    navigation.push(COUGH_QUESTIONS, { symptomsAdded: { ...symptomsAdded, ...symptoms } });
  };

  return (
    <SymptomsQuestion
      questionType={generiQuestionsTypes.EYES}
      onPressNo={() => nextScreen({})}
      onPressYes={() =>
        navigation.push(SYMPTOMS_QUESTIONNAIRE, {
          questionType: generiQuestionsTypes.EYES,
          nextScreen,
        })
      }
    />
  );
};

EyesQuestions.propTypes = {
  navigation: object,
  route: shape({
    params: shape({
      symptoms: object,
    }),
  }),
};

export default memo(EyesQuestions);
