import { PixelRatio, Dimensions, Platform } from 'react-native';
import strings from 'locale';

import userIcon from 'images/user.png';
import bellIcon from 'images/bell.png';
import paperClipIcon from 'images/paperClip.png';
import infoIcon from 'images/info.png';
import handIcon from 'images/hand.png';
import {
  NOTIFICATIONS_SCREEN,
  PDFS_SCREEN,
  PERSONAL_INFO,
  PROJECT_INFO_SCREEN,
  RATE_PROJECT_SCREEN,
} from './screens';

export const ONBOARDING_STEPS_NUMBER = 3;

export const { width: PIXEL_WIDTH, height: PIXEL_HEIGHT } = Dimensions.get('window');
export const HEIGHT = PixelRatio.getPixelSizeForLayoutSize(PIXEL_HEIGHT);
export const WIDTH = PixelRatio.getPixelSizeForLayoutSize(PIXEL_WIDTH);

export const isIos = Platform.OS === 'ios';

export const INHALER_TITLE = 'Usa inhalador';

export const SETTINGS_SECTIONS = [
  {
    title: strings.SETTINGS_SCREEN.personalInfoSection,
    icon: userIcon,
    nextScreen: PERSONAL_INFO,
  },
  {
    title: strings.SETTINGS_SCREEN.notificationsSection,
    icon: bellIcon,
    nextScreen: NOTIFICATIONS_SCREEN,
  },
  {
    title: strings.SETTINGS_SCREEN.pdfsSection,
    icon: paperClipIcon,
    nextScreen: PDFS_SCREEN,
  },
  { title: strings.SETTINGS_SCREEN.aboutSection, icon: infoIcon, nextScreen: PROJECT_INFO_SCREEN },
  { title: strings.SETTINGS_SCREEN.rateApp, icon: handIcon, nextScreen: RATE_PROJECT_SCREEN },
];
