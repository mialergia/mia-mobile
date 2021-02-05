import React from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import { string, shape } from 'prop-types';
import strings from 'locale';
import { isEmpty } from 'lodash';

import { getLongFormattedDate } from 'utils/dateHelpers';
import { capitalizeFirstLetter, getAnswerColor } from 'utils/helpers';
import Header from 'components/common/Header';
import { diaryAnswers } from 'constants/shapes';
import TouchableText from 'components/common/TouchableText';
import useOpenMapApp from 'hooks/useOpenMapApp';
import { getStyles } from './styles';

const DiaryDetailScreen = ({
  route: {
    params: {
      answers,
      date,
      comment,
      levelColors: { backgroundColor, textColor },
      coordinates,
    },
  },
}) => {
  const { onOpenMapApp } = useOpenMapApp(coordinates);
  const styles = getStyles(textColor);

  return (
    <>
      <Header
        backgroundColor={backgroundColor}
        title={getLongFormattedDate(date)}
        textStyle={styles.headerText}
        arrowColor={textColor}
      />
      <SafeAreaView style={styles.safearea}>
        <ScrollView contentContainerStyle={styles.container}>
          {answers.map(({ valorPregunta, respuesta }, index) => {
            const borderColor = getAnswerColor(respuesta, backgroundColor);

            return (
              <View
                key={`${valorPregunta}${index}`}
                style={[styles.answerContainer, { borderColor }]}>
                <Text style={styles.question}>{valorPregunta}</Text>
                <Text style={styles.answer}>{capitalizeFirstLetter(respuesta)}</Text>
              </View>
            );
          })}
          {!isEmpty(coordinates) && (
            <TouchableText
              containerStyle={styles.coordinates}
              onPress={onOpenMapApp}
              text={strings.SYMPTOMS_SCREEN.showLocation}
            />
          )}
          {!!comment && (
            <>
              <Text style={styles.commentTitle}>{`${strings.SYMPTOMS_SCREEN.comments}:`}</Text>
              <Text style={styles.comment}>{comment}</Text>
            </>
          )}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

DiaryDetailScreen.propTypes = {
  route: shape({
    params: shape({
      answers: diaryAnswers,
      date: string.isRequired,
      comment: string,
      levelColors: shape({
        backgroundColor: string,
        textColor: string,
      }),
    }),
  }),
};

export default DiaryDetailScreen;
