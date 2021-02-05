import React from 'react';
import { View, Text } from 'react-native';
import { string, shape } from 'prop-types';
import { split } from 'lodash';
import strings from 'locale';

import { getDayMonthDate } from 'utils/dateHelpers';
import { capitalizeFirstLetter, getAnswersSetColor } from 'utils/helpers';
import BoxButton from 'components/common/BoxButton';
import Separator from 'components/common/Separator';
import { useNavigation } from '@react-navigation/native';
import { DIARY_DETAIL_SCREEN } from 'constants/screens';
import { diaryAnswers } from 'constants/shapes';
import { getStyles } from './styles';

const DiaryButton = ({ diaryEntry: { fecha, comentario, respuestas, coordenadas } }) => {
  const navigation = useNavigation();
  const date = split(getDayMonthDate(fecha), ' ');
  const colors = getAnswersSetColor(respuestas);
  const styles = getStyles(colors.backgroundColor);
  const coordinates = coordenadas
    ?.substring(coordenadas.lastIndexOf('(') + 1, coordenadas.lastIndexOf(')'))
    .split(' ');

  const onButtonPress = () => {
    navigation.navigate(DIARY_DETAIL_SCREEN, {
      answers: respuestas,
      date: fecha,
      comment: comentario,
      levelColors: colors,
      coordinates,
    });
  };

  return (
    <BoxButton onPress={onButtonPress} containerStyle={styles.buttonContainer}>
      <View style={styles.container}>
        <View style={styles.border} />
        <View style={styles.dateContainer}>
          <Text style={styles.title}>{date[0]}</Text>
          <Text style={styles.title}>{capitalizeFirstLetter(date[1])}</Text>
        </View>
        <Separator vertical containerStyle={styles.separator} />
        <View style={styles.commentContainer}>
          <Text style={styles.commentTitle}>{strings.SYMPTOMS_SCREEN.comments}</Text>
          <Text style={styles.comment} numberOfLines={2}>
            {comentario || strings.SYMPTOMS_SCREEN.emptyComment}
          </Text>
        </View>
      </View>
    </BoxButton>
  );
};

DiaryButton.propTypes = {
  diaryEntry: shape({
    fecha: string.isRequired,
    comentario: string,
    respuestas: diaryAnswers,
    coordenadas: string,
  }),
};

export default DiaryButton;
