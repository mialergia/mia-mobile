import strings from 'locale';

export default {
  nombre: {
    presence: { message: strings.VALIDATION.namePresence },
  },
  fechaNacimiento: {
    presence: { message: strings.VALIDATION.dateOfBirthPresence },
  },
  departamento: {
    presence: { message: strings.VALIDATION.departmentPresence },
  },
};
