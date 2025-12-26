import { useAppDispatch } from "@/shared/api/store";
import { useState } from "react"
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import { registrationSchema } from "../validation/registration-schema";
import { userRegistrationThunk } from "@/features/user/thunk";

export const useRegistrationForm = () => {
  const [files, setFiles] = useState<File[]>([]);
  const dispatch = useAppDispatch();

  const form = useForm({
    resolver: yupResolver(registrationSchema),
    defaultValues: {
      username: '',
      birthday: new Date(),
      about: '',
      gender: 'female',
      cityId: '',
      purposeId: '',
      education: 'Не указано',
      job: 'Не указано',
      preferredGender: 'male',
      minAge: '16',
      maxAge: '50'
    }
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const newFiles = Array.from(e.target.files);
  
    setFiles(prev => {
      const existingNames = new Set(prev.map(f => f.name));

      const filtered = newFiles.filter(
        file => !existingNames.has(file.name)
      );

      return [...prev, ...filtered];
    });

    e.target.value = ''
  }

  const onSubmit = async (data: any) => {
    await dispatch(userRegistrationThunk({ data, files }))
  }

  return {
    form,
    handleFileChange,
    files,
    onSubmit
  }
}
