export default {
  COMMON: {
    appName: 'MIA',
    somethingWentWrong: 'Algo ha salido mal.',
    confirmation: 'Sí',
    negation: 'No',
    skip: 'Saltar',
    continue: 'Continuar',
    send: 'Enviar',
    confirm: 'Confirmar',
    cancel: 'Cancelar',
    other: 'Otro',
    error: 'Error',
    errorDescription: 'Algo ha salido mal. Intente nuevamente más tarde.',
    accept: 'Aceptar',
    suggestion: 'Sugerencia',
    save: 'Guardar',
    openSettings: 'Abrir ajustes',
    emptyFieldError: '{0} no puede ser vacío.',
  },

  LOG_IN: {
    title: 'Bienvenido!',
    email: 'Email',
    password: 'Contraseña',
    resetPasswordButton: 'Resetear contraseña',
    logInButton: 'Iniciar sesión',
    signUpButton: 'Crear cuenta',
  },

  POLLEN_SCREEN: {
    logout: 'Cerrar sesión',
    headerTitle: 'Último reporte:\n{0}',
  },

  MAP_SCREEN: {
    logout: 'Cerrar sesión',
    title: 'Mapa',
  },

  SETTINGS_SCREEN: {
    logout: 'Cerrar sesión',
    title: 'Ajustes',
    personalInfoSection: 'Información personal',
    notificationsSection: 'Notificaciones',
    notificationsBlockedTitle: 'Activá las notificaciones',
    notificationsBlockedBody:
      'Las notificaciones han sido desactivadas anteriormente. Por favor dirígete a ajustes para activarlas.',
    pdfsSection: 'Fichas informativas',
    aboutSection: 'Sobre el proyecto',
    rateApp: 'Dejanos tu opinión',
    rateAppDescription:
      'Esta es una primera versión del proyecto y nos gustaría tener tu opinión de cómo hacerlo cada vez mejor en futuras versiones. Escuchamos sugerencias, mejoras y cualquier cambio que te parece podría ayudar más.\nPara esto te dejamos una breve encuesta para que nos dejes tu opinión:',
    startSurvey: 'Comenzar encuesta',
  },

  SYMPTOMS_SCREEN: {
    logout: 'Cerrar sesión',
    comments: 'Comentarios',
    emptyComment: 'Comentario no agregado.',
    showLocation: 'Ver ubicación agregada',
  },

  EMAIL_SENT: {
    emailSentTitle: 'Mail enviado',
    emailSent: 'Te enviamos un mail a \n',
    emailSentDescription: 'Por favor, revisá tu correo electrónico para poder ',
  },

  SIGN_UP: {
    title: 'Registro',
    email: 'Email',
    password: 'Contraseña',
    passwordConfirmation: 'Repetir contraseña',
    logInButton: 'Iniciar sesión',
    signUpButton: 'Registrarme',
    emailAction: 'confirmar tu cuenta.',
    termsAndConditionsTitle: 'Sobre el proyecto',
  },

  VALIDATION: {
    emailPresence: '^El email no puede ser vacío',
    emailFormat: '^Ingrese un email válido',
    passwordPresence: '^La contraseña no puede ser vacía',
    password2Presence: '^La confirmación de contraseña no puede ser vacía',
    namePresence: '^El nombre no puede ser vacío',
    dateOfBirthPresence: '^La fecha de nacimiento no puede ser vacía',
    datePresence: '^Debe agregar una fecha',
    passwordsEquality: '^Las contraseñas no coinciden',
    departmentPresence: '^El departamento no puede ser vacío',
  },

  POLLEN_CIRCLE: {
    buttonTitle: '+ INFO',
    treesTitle: 'Pólenes  de árboles y arbustos',
    grassTitle: 'Polen de hierbas',
    mushroomTitle: 'Esporas de hongos',
    nivel: 'Nivel ',
    alert: `Según la concentración de polen en {0}, tiene riesgo potencialmente {1} de tener {2} por su alergia. Procure realizar las medidas de evitación.`,
    alertHigh: 'síntomas',
    alertMedium: 'molestias',
    showPdf: 'Ficha',
  },

  ONBOARDING_QUESTIONS: {
    nasalQuestion: '¿Tuvo molestias nasales en el último año?',
    eyesQuestion: '¿Tiene molestias en los ojos?',
    coughQuestion: '¿Tuvo tos recurrente en el último año?',
    selectSymptoms: 'Por favor seleccione los síntomas',
  },

  PERSONAL_INFO: {
    title: 'Antes de empezar, algunas preguntas...',
    name: 'Nombre y Apellido',
    address: 'Dirección',
    department: 'Departamento',
    zone: 'Barrio',
    dateOfBorn: 'Fecha de nacimiento',
    gender: 'Género',
    picture: 'Foto de perfil',
    datePlaceholder: 'Fecha de nacimiento',
    female: 'Femenino',
    male: 'Masculino',
    selectGender: 'Seleccionar sexo',
    alergiasTitle: 'Alergias',
    alergiasSearch: 'Buscar alergias...',
    alergiasDisplayKey: 'nombreAlergia',
  },

  DIARY_ENTRY: {
    currentLocation: 'Agregar ubicación actual',
    currentLocationError:
      'La ubicación ha sido desactivada anteriormente. Por favor, dirígete a ajustes para activarla.',
    dateQuestion: '¿En qué fecha ocurrieron los síntomas?',
    otherComment: '¿Querés agregar algún otro comentario?',
    dateInput: 'Fecha',
    button: 'Terminar',
    emptyText:
      'Parece que no has agregado nada aún. ¡Presiona el botón para agregar tu primera entrada!',
    mapAppError:
      'Debes instalar una aplicación de mapas, dirígite a la tienda para descargarla y vuelva a intentarlo.',
  },

  RESET_PASSWORD: {
    email: 'Email',
    button: 'Cambiar contraseña',
    title: 'Ingresá tu mail para cambiar tu contraseña',
    emailAction: 'cambiar tu contraseña.',
  },
};
