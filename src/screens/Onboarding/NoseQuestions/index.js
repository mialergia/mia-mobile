import React, { memo } from 'react';
import { object } from 'prop-types';

import SymptomsQuestion from 'components/common/SymptomsQuestion';
import { EYES_QUESTIONS, SYMPTOMS_QUESTIONNAIRE } from 'constants/screens';
import { generiQuestionsTypes } from 'constants/data';
import useGenericQuestions from 'hooks/useGenericQuestions';
import Loading from 'components/common/Loading';
import Error from 'components/common/Error';

const NoseQuestions = ({ navigation }) => {
  const { loading, genericQuestions, error } = useGenericQuestions();

  const nextScreen = symptoms => {
    navigation.push(EYES_QUESTIONS, { symptomsAdded: symptoms });
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error errorMessage={error} backbutton={false} logoutButton />;
  }

  return (
    genericQuestions && (
      <SymptomsQuestion
        questionType={generiQuestionsTypes.NASAL}
        onPressNo={() => nextScreen({})}
        onPressYes={() =>
          navigation.push(SYMPTOMS_QUESTIONNAIRE, {
            questionType: generiQuestionsTypes.NASAL,
            nextScreen,
          })
        }
        backButton={false}
      />
    )
  );
};

NoseQuestions.propTypes = {
  navigation: object,
};

export default memo(NoseQuestions);
