import React, { useState, memo } from 'react';
import { Alert } from 'react-native';
import Geolocation from '@react-native-community/geolocation';

import SelectInput from 'components/common/SelectInput';
import { BACKGROUND_COLOR, DARK_GREY } from 'constants/styles';
import strings from 'locale';
import { isIos } from 'constants/app';
import { func, string } from 'prop-types';

Geolocation.setRNConfiguration({
  authorizationLevel: 'whenInUse',
});

const CurrentLocation = ({ handleValueChange, inputName }) => {
  const [allowLocation, setAllowLocation] = useState(false);

  const onPositionChange = ({ longitude, latitude }) => {
    const coordinates =
      longitude && latitude
        ? {
            longitud: longitude,
            latitud: latitude,
          }
        : null;

    handleValueChange([inputName], coordinates);
  };

  const handleError = error => {
    onPositionChange({});

    if (error.PERMISSION_DENIED === 1) {
      Alert.alert(strings.COMMON.error, strings.DIARY_ENTRY.currentLocationError, [
        {
          text: strings.COMMON.accept,
          onPress: () => {
            setAllowLocation(false);
          },
        },
      ]);
    }
  };

  const onPress = isChecked => {
    isIos && Geolocation.requestAuthorization();

    setAllowLocation(isChecked);
    if (isChecked) {
      Geolocation.getCurrentPosition(({ coords }) => {
        onPositionChange(coords);
      }, handleError);
    } else {
      onPositionChange({});
    }
  };

  return (
    <>
      <SelectInput
        question={{ nombre: strings.DIARY_ENTRY.currentLocation }}
        containerStyle={{ backgroundColor: BACKGROUND_COLOR, paddingHorizontal: 5 }}
        titleStyle={{ color: DARK_GREY }}
        isChecked={allowLocation}
        handleValueChange={onPress}
      />
    </>
  );
};

CurrentLocation.propTypes = {
  handleValueChange: func.isRequired,
  inputName: string.isRequired,
};

export default memo(CurrentLocation);
