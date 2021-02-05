import React from 'react';
import { View, Image, Text, TouchableOpacity, ViewPropTypes } from 'react-native';
import { func, bool, object, node } from 'prop-types';

import activeCheckboxIcon from 'images/activeCheckbox.png';
import unactiveCheckboxIcon from 'images/unactiveCheckbox.png';
import { subQuestionShape } from 'constants/shapes';
import styles from './styles';

const SelectInput = ({
  question: { id, nombre, descripcion } = {},
  isChecked,
  handleValueChange,
  containerStyle,
  titleStyle,
  icon,
}) => {
  const onPress = () => {
    if (id) {
      handleValueChange(id, !isChecked);
    } else {
      handleValueChange(!isChecked);
    }
  };

  return (
    <TouchableOpacity style={[styles.container, containerStyle]} onPress={onPress}>
      {isChecked ? (
        <Image style={styles.checkbox} source={activeCheckboxIcon} />
      ) : (
        <Image style={styles.checkbox} source={unactiveCheckboxIcon} />
      )}
      <View style={styles.textContainer}>
        <Text style={[styles.title, titleStyle]}>{nombre}</Text>
        {!!descripcion && <Text style={styles.description}>{descripcion}</Text>}
      </View>
      {!!icon && <Image source={icon} style={styles.icon} />}
    </TouchableOpacity>
  );
};

SelectInput.propTypes = {
  question: subQuestionShape,
  isChecked: bool.isRequired,
  handleValueChange: func.isRequired,
  containerStyle: ViewPropTypes.styles,
  titleStyle: object,
  icon: node,
};

export default SelectInput;
