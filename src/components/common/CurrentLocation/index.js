import React, { useState, memo } from 'react';
import Geolocation from '@react-native-community/geolocation';
import { PERMISSIONS } from 'react-native-permissions';

import SelectInput from 'components/common/SelectInput';
import { BACKGROUND_COLOR, DARK_GREY } from 'constants/styles';
import strings from 'locale';
import { isIos } from 'constants/app';
import { func, string } from 'prop-types';
import { askForPermission, getGenericErrorAlert } from 'utils/helpers';

Geolocation.setRNConfiguration({
  authorizationLevel: 'whenInUse',
});

const PERMISSION_PATH = isIos
  ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
  : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;

const CurrentLocation = ({ handleValueChange, inputName }) => {
  const [allowLocation, setAllowLocation] = useState(false);

  const setCurrentPosition = ({ longitude, latitude }) => {
    const coordinates =
      longitude && latitude
        ? {
            longitud: longitude,
            latitud: latitude,
          }
        : null;

    handleValueChange([inputName], coordinates);
  };

  const getCurrentPosition = async isChecked => {
    setAllowLocation(isChecked);
    if (isChecked) {
      await Geolocation.getCurrentPosition(
        ({ coords }) => {
          setCurrentPosition(coords);
        },
        getGenericErrorAlert,
        {
          timeout: 2000,
          maximumAge: 3600000,
        },
      );
    } else {
      setCurrentPosition({});
    }
  };

  const onPress = isChecked => {
    askForPermission(
      PERMISSION_PATH,
      () => getCurrentPosition(isChecked),
      strings.DIARY_ENTRY.currentLocationError,
    );
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
