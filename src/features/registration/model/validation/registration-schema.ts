import * as yup from 'yup';

export const registrationSchema = yup.object({
  username: yup.string().required('Укажите имя!'),
  birthday: yup.date().required('Укажите дату рождения!'),
  about: yup.string()
    .required('Расскажите о себе')
    .min(10, 'Расскажите о себе побольше')
    .max(500, 'Не так много (500 символов)'),
  gender: yup.string().oneOf(['male', 'female']).required(),
  cityId: yup.string().required('Выберите город проживания!'),
  purposeId: yup.string().required('Выберите предпочтения!'),
  education: yup.string().default('Не указано'),
  job: yup.string().default('Не указано'),
  preferredGender: yup.string().oneOf(['male', 'female']).default('male'),
  minAge: yup.string().default('16'),
  maxAge: yup.string().default('50')
});

export type RegistrationFormData = yup.InferType<typeof registrationSchema>;
