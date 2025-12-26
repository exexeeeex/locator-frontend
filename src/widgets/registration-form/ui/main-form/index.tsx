import { Card } from "@/shared/components/ui/card";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import {  SquareUserRound,  User } from "lucide-react";
import { type FC } from "react";
import { DayPicker } from "react-day-picker";
import { ru } from 'react-day-picker/locale'
import "react-day-picker/style.css";
import { RegistrationFormHeader } from "../form-header";
import { Textarea } from "@/shared/components/ui/textarea";
import { CityChanger } from '@/widgets/city-changer'
import { Controller } from "react-hook-form";
import type { RegistrationFormProps } from "@/shared/lib/react-hook-form";
import { useRegistrationMain } from "@/features/registration";

export const RegistrationMain: FC<RegistrationFormProps> = ({ control, register, errors, setValue }) => {
  const { isMale, isFemale } = useRegistrationMain(control)

  return (
    <Card className="w-full bg-card border-1 rounded-3xl mb-[30px] border-border p-[20px]">
      <RegistrationFormHeader 
        label="Основная информация" 
        icon={<SquareUserRound color="white" size={20}/>}/>
      <div>
        <Label className="font-semibold text-lg">Имя</Label>
        <div className="relative mt-[10px]">
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
            <User className="h-5 w-5 text-muted-foreground" />
          </div>
          <Input
            {...register('username')}
            className="pl-10 rounded-lg border-1 bg-input transition-colors duration-300 border-border h-[45px] text-[16px] focus-visible:bg-card focus-visible:ring-0"
            placeholder="Введите ваше имя"
          />
        </div>
      </div>
      <div className="w-full">
        <Label className="font-semibold text-lg">Город</Label>
        <div className="relative mt-[10px]">
          <Controller
            name="cityId"
            control={control}
            render={({ field }) => (
              <CityChanger
                currentCity={field.value}
                setValue={field.onChange} 
              />
            )}
          />
        {errors.cityId && <p className="text-[red]">{errors.cityId.message}</p>}
        </div>
      </div>
      <div>
        <Label className="font-semibold text-lg">Пол</Label>
          <section className="mt-[5px] flex w-full gap-[10px]">
            <Card 
                onClick={() => setValue('gender', 'male')} 
                className={`
                flex flex-1 items-center select-none justify-center h-[20px] duration-300 transition-colors
                ${isMale 
                  ? 'bg-card border-2 border-primary' 
                  : 'bg-background hover:bg-card'
                }
              `}
              >
            <h1 className="font-regular">Мужчина</h1>
          </Card>
          <Card
            onClick={() => setValue('gender', 'female')} 
            className={`
              flex flex-1 items-center select-none justify-center h-[20px] duration-300 transition-colors
              ${isFemale 
                ? 'bg-card border-2 border-primary' 
                : 'bg-background hover:bg-card'
              }
            `}
          >
            <h1 className="font-regular">Женщина</h1>
          </Card>
      </section>
      </div>
      <div>
        <Label className="font-semibold text-lg mb-[10px]">Немного о себе</Label>
        <Textarea
          {...register('about')}
          className={`${errors.about ? 'border-[red] focus-visible:bg-[red]' : 'border-border'}
            focus-visible:ring-0 bg-background transition-colors duration-300 hover:bg-card focus-visible:bg-card rounded-lg h-[200px]`}
          placeholder="Расскажи о своих интересах, увлечениях, чем занимаешься.."/>
          {errors.about && <p className="text-[red]">{errors.about.message}</p>}
      </div>
      <div>
        <Label className="font-semibold text-lg">Дата рождения</Label>
        <Controller
          control={control}
          name="birthday"
          render={({ field }) => (
            <DayPicker
              mode="single"
              locale={ru}
              className={`${errors.birthday ? 'bg-[red]' : 'bg-background'} p-2 rounded-lg`}
              classNames={{
                selected: 'bg-primary rounded-full text-card',
                chevron: 'bg-background',
                dropdown: 'bg-background rounded-sm px-2 py-1 mx-1',
                caption_dropdowns: 'flex gap-2 justify-center mb-4',
                caption_label: 'hidden', 
              }}
              captionLayout="dropdown"
              fromYear={1980}
              selected={field.value}
              onSelect={(date) => field.onChange(date?.toDateString())}
              toYear={new Date().getFullYear() - 16}
              formatters={{
                formatCaption: () => {
                  return '';
                }
              }}
          />
          )}/>
        {errors.birthday && <p className="text-[red]">{errors.birthday.message}</p>}
      </div>
    </Card>
  )
}
