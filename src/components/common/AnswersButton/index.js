import React from 'react';
import { func, string, arrayOf } from 'prop-types';
import { Text, View, Image } from 'react-native';

import BoxButton from 'components/common/BoxButton';
import { getQuestionIcon, capitalizeFirstLetter } from 'utils/helpers';
import styles from './styles';

const AnswersButton = ({ onPress, answers = [] }) =>
  answers.map((answer, index) => {
    const icon = getQuestionIcon(answer);

    return (
      <BoxButton
        key={`${answer}-${index}`}
        containerStyle={styles.buttonContainer}
        onPress={() => onPress(answer)}>
        <View style={styles.container}>
          <Text style={styles.text}>{capitalizeFirstLetter(answer)}</Text>
          {icon && <Image source={icon} style={styles.icon} />}
        </View>
      </BoxButton>
    );
  });

AnswersButton.propTypes = {
  onPress: func.isRequired,
  answers: arrayOf(string.isRequired),
};

export default AnswersButton;
