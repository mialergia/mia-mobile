import strings from 'locale';

export default ({ response }) => {
  if (response) {
    const { data } = response;

    if (data) {
      const { errors } = data;

      if (Array.isArray(errors)) {
        return errors[0].message;
      }
    }
  }

  return strings.COMMON.somethingWentWrong;
};
