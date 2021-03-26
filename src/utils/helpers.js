import { Alert } from 'react-native';
import queryString from 'query-string';
import { groupBy } from 'lodash';
import strings from 'locale';
import { check, request, RESULTS, openSettings } from 'react-native-permissions';

import rinitisIcon from 'images/rinitis.png';
import coughIcon from 'images/cough.png';
import eyesIcon from 'images/eyes.png';
import happyEmoji from 'images/happyEmoji.png';
import smileEmoji from 'images/smileEmoji.png';
import seriousEmoji from 'images/seriousEmoji.png';
import sadEmoji from 'images/sadEmoji.png';
import redWarningIcon from 'images/warning-red.png';
import yellowWarningIcon from 'images/warning-yellow.png';
import {
  pollenLevels,
  generiQuestionsTypes,
  gendersTypes,
  symptomsLevel,
  pollenTypes,
  departments,
  zones,
} from 'constants/data';
import {
  MEDIUM_GREY,
  DARK_YELLOW,
  DARK_GREEN,
  DARK_RED,
  WHITE,
  DARK_GREY,
  PASTEL_YELLOW,
  PASTEL_RED,
} from 'constants/styles';
import { getMonthYearDate } from 'utils/dateHelpers';
import treeIcon from 'images/tree.png';
import leavesIcon from 'images/leaves.png';
import mushroomIcon from 'images/mushroom.png';

export const applyQueryParams = (url, params) => {
  const queryParams = queryString.stringify(params);
  return `${url}?${queryParams}`;
};

export const getLevelColor = level => {
  switch (level) {
    case pollenLevels.HIGH:
      return DARK_RED;
    case pollenLevels.MEDIUM:
      return DARK_YELLOW;
    case pollenLevels.LOW:
      return DARK_GREEN;
    default:
      return MEDIUM_GREY;
  }
};

export const getGroupTitle = nameGroup => {
  let icon;
  let title;
  switch (nameGroup) {
    case pollenTypes.TREES:
      icon = treeIcon;
      title = strings.POLLEN_CIRCLE.treesTitle;
      break;
    case pollenTypes.GRASS:
      icon = leavesIcon;
      title = strings.POLLEN_CIRCLE.grassTitle;
      break;
    case pollenTypes.MUSHROOMS:
      icon = mushroomIcon;
      title = strings.POLLEN_CIRCLE.mushroomTitle;
      break;
    default:
  }
  return { icon, title };
};

export const getGenericQuestionImage = questionType => {
  const { NASAL, EYES, COUGH } = generiQuestionsTypes;

  switch (questionType) {
    case NASAL:
      return rinitisIcon;
    case EYES:
      return eyesIcon;
    case COUGH:
      return coughIcon;
    default:
      break;
  }
};

export const gendersLabels = [
  { label: strings.PERSONAL_INFO.female, value: gendersTypes.FEMALE },
  { label: strings.PERSONAL_INFO.male, value: gendersTypes.MALE },
  { label: strings.COMMON.other, value: gendersTypes.OTHER },
];

export const departmentsLabels = departments.map(department => {
  return { label: department, value: department };
});

export const zonesLabels = zones.map(zone => {
  return { label: zone, value: zone };
});

export const getQuestionIcon = answer => {
  let icon = null;
  switch (answer) {
    case 'nada':
      icon = happyEmoji;
      break;
    case 'poco':
      icon = smileEmoji;
      break;
    case 'algo':
      icon = seriousEmoji;
      break;
    case 'mucho':
      icon = sadEmoji;
      break;
    default:
      break;
  }

  return icon;
};

export const capitalizeFirstLetter = string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const groupByMonthYear = dates => {
  const entries = groupBy(dates, ({ fecha }) => getMonthYearDate(fecha));
  const entriesAsArray = Object.keys(entries).map(date => ({ date, entries: entries[date] }));
  return entriesAsArray;
};

export const answerColor = {
  [symptomsLevel.HIGH]: { backgroundColor: DARK_RED, textColor: WHITE },
  [symptomsLevel.MEDIUM]: { backgroundColor: DARK_YELLOW, textColor: DARK_GREY },
  [symptomsLevel.LOW]: { backgroundColor: DARK_GREEN, textColor: WHITE },
};

export const getAnswersSetColor = answers => {
  const { MEDIUM, HIGH, LOW } = symptomsLevel;
  if (answers.some(({ respuesta }) => HIGH.includes(respuesta))) {
    return answerColor[HIGH];
  }
  if (answers.some(({ respuesta }) => respuesta === MEDIUM)) {
    return answerColor[MEDIUM];
  }
  return answerColor[LOW];
};

export const getAnswerColor = (answer, answersSetColor) => {
  const { MEDIUM, HIGH } = symptomsLevel;
  let color = MEDIUM_GREY;

  if (
    symptomsLevel.HIGH.includes(answer) &&
    answerColor[HIGH].backgroundColor === answersSetColor
  ) {
    color = answerColor[HIGH].backgroundColor;
  } else if (
    symptomsLevel.MEDIUM.includes(answer) &&
    answerColor[MEDIUM].backgroundColor === answersSetColor
  ) {
    color = answerColor[MEDIUM].backgroundColor;
  }

  return color;
};

export const getDataFromUrl = url => {
  const queryParams = queryString.extract(url);
  return queryString.parse(queryParams);
};

export const directions = {
  RIGHT: 'right',
  DOWN: 'down',
  UP: 'up',
  LEFT: 'left',
};

export const getRotation = (direction, initialAngle = 0) => {
  const { UP, RIGHT, DOWN } = directions;
  let rotation = 360;

  switch (direction) {
    case UP:
      rotation = 90;
      break;
    case RIGHT:
      rotation = 180;
      break;
    case DOWN:
      rotation = 270;
      break;
    default:
      break;
  }

  return `${rotation - initialAngle}`;
};

export const getAlertIcon = level => {
  let icon = yellowWarningIcon;
  let backgroundColor = PASTEL_YELLOW;
  if (level === pollenLevels.HIGH) {
    backgroundColor = PASTEL_RED;
    icon = redWarningIcon;
  }
  return { icon, backgroundColor };
};

export const getUserAllergies = (selectedAllergies, allAllergies) => {
  return selectedAllergies.reduce((prevVal, currVal) => {
    const currentAllergy = allAllergies.find(allergy => allergy.id === currVal);
    const newArray = allAllergies.reduce((allergiesList, value) => {
      if (value.nombreAlergia === currentAllergy.nombreAlergia) allergiesList.push(value.id);
      return allergiesList;
    }, []);
    prevVal = prevVal.concat(newArray);
    return prevVal;
  }, []);
};

export const customIf = (condition, then, otherwise) => (condition ? then : otherwise);

export const getAllergyAlerts = alergias => {
  const allergiesList = alergias.reduce((prevVal, currVal) => {
    const allergyName = currVal.nombreAlergia ? currVal.nombreAlergia : currVal.nombreComun;
    if (prevVal.includes(allergyName)) return prevVal;
    prevVal.push(allergyName);
    return prevVal;
  }, []);
  return allergiesList.reduce(
    (prevVal, currVal, idx) =>
      idx !== 0
        ? customIf(
            idx === allergiesList.length - 1,
            `${prevVal} y ${currVal}`,
            `${prevVal}, ${currVal}`,
          )
        : currVal,
    '',
  );
};

export const getLevelTex = level => {
  const levelText =
    level === pollenLevels.HIGH
      ? strings.POLLEN_CIRCLE.alertHigh
      : strings.POLLEN_CIRCLE.alertMedium;
  return levelText;
};

export const filterAllergies = allergies => {
  if (!allergies) return [];
  return allergies.reduce((prevVal, currVal) => {
    const findAllergy = prevVal.find(allergy => allergy.nombreAlergia === currVal.nombreAlergia);
    if (findAllergy) return prevVal;
    prevVal.push(currVal);
    return prevVal;
  }, []);
};

export const filterUserAllergies = (userAllergiesIds, allAllergies) => {
  if (!userAllergiesIds || !allAllergies) return [];
  const userAllergies = [];
  return allAllergies.reduce((prevVal, allergy) => {
    if (
      userAllergiesIds.includes(allergy.id) &&
      !userAllergies.find(a => a.nombreAlergia === allergy.nombreAlergia)
    ) {
      prevVal.push(allergy.id);
      userAllergies.push(allergy);
    }
    return prevVal;
  }, []);
};

export const getGenericErrorAlert = () => {
  Alert.alert(strings.COMMON.error, strings.COMMON.errorDescription, [
    { text: strings.COMMON.accept },
  ]);
};

export const askForPermission = async (permissionPath, onGranted, errorDescription) => {
  const getPermissionStatus = async () => {
    let permissionStatus = await check(permissionPath);

    if (permissionStatus === RESULTS.DENIED) {
      permissionStatus = await request(permissionPath);
    }

    return permissionStatus;
  };

  const isLocationAllowed = await getPermissionStatus();

  switch (isLocationAllowed) {
    case RESULTS.DENIED:
    case RESULTS.BLOCKED: {
      Alert.alert(strings.COMMON.error, errorDescription, [
        { text: strings.COMMON.cancel },
        { text: strings.COMMON.openSettings, onPress: openSettings },
      ]);
      break;
    }
    case RESULTS.LIMITED:
    case RESULTS.GRANTED: {
      onGranted();
      break;
    }
    default: {
      getGenericErrorAlert();
      break;
    }
  }
};
