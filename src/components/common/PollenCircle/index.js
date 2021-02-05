import React, { useMemo } from 'react';
import { View, Text, Image } from 'react-native';
import ProgressCircle from 'react-native-progress-circle';
import { useNavigation } from '@react-navigation/native';

import strings from 'locale';
import { pollenShape } from 'constants/shapes';
import { LIGHT_GREY, WHITE } from 'constants/styles';
import { getLevelColor, getGroupTitle } from 'utils/helpers';
import { POLLEN_DETAIL_SCREEN } from 'constants/screens';
import styles from './styles';
import Button from '../Button';
import Separator from '../Separator';

const PollenCircle = ({ pollen: { id, name, nivel } }) => {
  const navigation = useNavigation();
  const { icon, title, level } = useMemo(() => {
    const level = nivel;
    const { icon, title } = getGroupTitle(name);

    return { icon, title, level };
  }, [name, nivel]);

  const onButtonPress = () => {
    navigation.navigate(POLLEN_DETAIL_SCREEN, { id, tipo: name, nivel });
  };

  return (
    <>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.container}>
        <ProgressCircle
          percent={100}
          radius={70}
          borderWidth={8}
          color={getLevelColor(level)}
          shadowColor={LIGHT_GREY}
          bgColor={WHITE}>
          <Image source={icon} />
        </ProgressCircle>
        <Button
          title={strings.POLLEN_CIRCLE.buttonTitle}
          inverseStyle
          containerStyle={styles.buttonContainer}
          textStyle={styles.buttonText}
          onPress={onButtonPress}
        />
      </View>
      <Text style={styles.description}>{strings.POLLEN_CIRCLE.nivel + level}</Text>
      <Separator containerStyle={styles.separator} />
    </>
  );
};

PollenCircle.propTypes = {
  pollen: pollenShape,
};

export default PollenCircle;
