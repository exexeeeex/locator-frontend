export type RegistrationFormData = {
  username: string;
  birthday: Date;
  about: string;
  gender: 'male' | 'female'; 
  cityId: string;
  purposeId: string;
  education: string;
  job: string;
  preferredGender: 'male' | 'female'; 
  minAge: string;
  maxAge: string;
};