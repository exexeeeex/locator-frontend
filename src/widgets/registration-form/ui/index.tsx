import { useRegistrationForm } from "@/features/registration"
import { RegistrationMain } from "./main-form";
import { RegistrationPhoto } from "./photo-upload";
import { fi } from "react-day-picker/locale";
import { RegistrationPrioritySelector } from "./priority-selector";
import { Button } from "@/shared/components/ui/button";

export const RegistrationForm = () => {
  const { form, handleFileChange, files, onSubmit } = useRegistrationForm()

  const { control, register, formState: { errors, isSubmitting } } = form;

  return (
    <form onSubmit={onSubmit}>
      <RegistrationMain 
        control={control}
        register={register}
        errors={errors}
        setValue={form.setValue}/>
      <RegistrationPhoto 
        files={files}
        onFileChange={handleFileChange}/>
      <RegistrationPrioritySelector 
        control={control}
        setValue={form.setValue}/>
      <Button disabled={isSubmitting} type="submit" className="mb-[60px]">{isSubmitting ? 'Создание...' : 'Создать анкету'}</Button>
    </form>
  )
}
