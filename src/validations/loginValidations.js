import strings from 'locale';

export default {
  email: {
    presence: { message: strings.VALIDATION.emailPresence },
    email: {
      message: strings.VALIDATION.emailFormat,
    },
  },
  password: {
    presence: { message: strings.VALIDATION.passwordPresence },
  },
};
