import { string, object, shape, arrayOf, number } from 'prop-types';

export const pollenShape = shape({
  polenes: arrayOf(
    shape({
      nive: string.isRequired,
      fecha: string.isRequired,
      grupoPolinico: object.isRequired,
    }),
  ),
});

export const subQuestionShape = shape({
  id: string,
  title: string,
  description: string,
});

export const subQuestionsArray = arrayOf(subQuestionShape);

export const diaryAnswers = arrayOf(
  shape({
    pregunta: number.isRequired,
    respuesta: string.isRequired,
  }),
);

export const routeShape = paramsType =>
  shape({
    params: shape(paramsType),
  });

export const allergiesShape = shape({
  id: number.isRequired,
  nombreComun: string.isRequired,
  nombreAlergia: string.isRequired,
  grupoPolinico: shape({
    id: string.isRequired,
    nombre: string.isRequired,
  }),
});

export const userShape = shape({
  id: number.isRequired,
  alergias: arrayOf(number),
  email: string.isRequired,
  fechaNacimiento: string.isRequired,
  necesitaOnboarding: false,
  nombre: string.isRequired,
  notificaciones: arrayOf(number),
  onesignalPlayerId: string,
  sexo: string,
});

export const alertShape = shape({
  warningMessage: string.isRequired,
  nivel: string.isRequired,
});
