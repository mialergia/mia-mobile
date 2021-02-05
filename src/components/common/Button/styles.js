import { StyleSheet } from 'react-native';

import { GREEN, WHITE, SHADOW, LIGHT_GREY } from 'constants/styles';

export const stylesFunction = (inverseStyle, containerStyle, textStyle, roundIcon, disabled) => {
  const activeBackgroundColor = inverseStyle ? WHITE : GREEN;
  const activeLineColor = inverseStyle ? GREEN : WHITE;

  return StyleSheet.create({
    container: {
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: disabled ? LIGHT_GREY : activeBackgroundColor,
      borderWidth: inverseStyle ? 1 : 0,
      borderColor: disabled ? LIGHT_GREY : activeLineColor,
      borderRadius: 7,
      height: 50,
      width: '75%',
      marginBottom: 20,
      ...containerStyle,
    },

    roundContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      width: 75,
      height: 75,
      borderRadius: 75 / 2,
      backgroundColor: GREEN,
      position: 'absolute',
      bottom: 10,
      right: 20,
      ...SHADOW,
    },

    title: {
      color: disabled ? WHITE : activeLineColor,
      fontWeight: 'bold',
      fontSize: roundIcon ? 35 : 20,
      paddingBottom: 3,
      ...textStyle,
    },
  });
};
