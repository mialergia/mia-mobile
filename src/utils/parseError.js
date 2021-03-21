import strings from 'locale';
import { capitalize } from 'validate.js';

export default ({ response }) => {
  const { formatString } = strings;

  if (response) {
    const { data } = response;

    if (data) {
      const { errors } = data;

      if (Array.isArray(errors)) {
        const { message, code, field } = errors[0];
        let error = message;

        if (code === 'null' && field) {
          error = formatString(strings.COMMON.emptyFieldError, capitalize(field));
        }

        return error;
      }
    }
  }

  return strings.COMMON.somethingWentWrong;
};
