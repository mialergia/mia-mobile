import strings from 'locale';

export default {
  email: {
    presence: { message: strings.VALIDATION.emailPresence },
    email: {
      message: strings.VALIDATION.emailFormat,
    },
  },
  password1: {
    presence: { message: strings.VALIDATION.passwordPresence },
  },
  password2: {
    presence: { message: strings.VALIDATION.password2Presence },
    equality: {
      attribute: 'password1',
      message: strings.VALIDATION.passwordsEquality,
    },
  },
};
