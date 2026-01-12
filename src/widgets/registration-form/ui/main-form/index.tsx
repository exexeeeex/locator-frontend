import { Card } from '@/shared/components/ui/card';
import { Input } from '@/shared/components/ui/input';
import { Label } from '@/shared/components/ui/label';
import { SquareUserRound, User } from 'lucide-react';
import { type FC } from 'react';
import { DayPicker } from 'react-day-picker';
import { ru } from 'react-day-picker/locale';
import 'react-day-picker/style.css';
import { RegistrationFormHeader } from '../form-header';
import { Textarea } from '@/shared/components/ui/textarea';
import { CityChanger } from '@/widgets/city-changer';
import { Controller } from 'react-hook-form';
import type { RegistrationFormProps } from '@/shared/types';
import { useRegistrationMain } from '@/features/registration';

export const RegistrationMain: FC<RegistrationFormProps> = ({
    control,
    register,
    errors,
    setValue,
}) => {
    const { isMale, isFemale } = useRegistrationMain(control);

    return (
        <Card
            className='
      w-full mb-4 p-6
      rounded-3xl
      bg-card/80 backdrop-blur-xl
      border border-border/40
      shadow-[0_8px_30px_-12px_rgba(0,0,0,0.12)]
    '
        >
            <RegistrationFormHeader
                label='Основная информация'
                icon={<SquareUserRound size={18} color='white' />}
            />

            {/* Имя */}
            <div className='space-y-2'>
                <Label className='text-[15px] font-medium'>Имя</Label>
                <div className='relative'>
                    <User className='absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground/70' />
                    <Input
                        {...register('username')}
                        placeholder='Ваше имя'
                        className='
              h-12 pl-11 text-[17px]
              rounded-2xl
              bg-input/80
              border border-border/40
              focus-visible:ring-4 focus-visible:ring-primary/20
              focus-visible:bg-card
              transition
            '
                    />
                </div>
            </div>

            {/* Город */}
            <div className='space-y-2 mt-5'>
                <Label className='text-[15px] font-medium'>Город</Label>
                <Controller
                    name='cityId'
                    control={control}
                    render={({ field }) => (
                        <CityChanger
                            currentCity={field.value}
                            onSelectCity={field.onChange}
                        />
                    )}
                />
                {errors.cityId && (
                    <p className='text-sm text-destructive'>
                        {errors.cityId.message}
                    </p>
                )}
            </div>

            {/* Пол */}
            <div className='space-y-2 mt-5'>
                <Label className='text-[15px] font-medium'>Пол</Label>
                <div className='flex bg-muted/60 p-1 rounded-2xl'>
                    <button
                        onClick={() => setValue('gender', 'male')}
                        className={`
              flex-1 h-10 rounded-xl text-[15px] font-medium transition-all
              ${isMale ? 'bg-card shadow-sm' : 'text-muted-foreground'}
            `}
                    >
                        Мужчина
                    </button>
                    <button
                        onClick={() => setValue('gender', 'female')}
                        className={`
              flex-1 h-10 rounded-xl text-[15px] font-medium transition-all
              ${isFemale ? 'bg-card shadow-sm' : 'text-muted-foreground'}
            `}
                    >
                        Женщина
                    </button>
                </div>
            </div>

            {/* О себе */}
            <div className='space-y-2 mt-5'>
                <Label className='text-[15px] font-medium'>О себе</Label>
                <Textarea
                    {...register('about')}
                    placeholder='Пару слов о себе…'
                    className='
            min-h-35
            rounded-2xl
            bg-input/80
            border border-border/40
            text-[16px] leading-relaxed
            focus-visible:ring-4 focus-visible:ring-primary/20
            focus-visible:bg-card
            transition
          '
                />
                {errors.about && (
                    <p className='text-sm text-destructive'>
                        {errors.about.message}
                    </p>
                )}
            </div>

            {/* Дата рождения */}
            <div className='space-y-2 mt-5'>
                <Label className='text-[15px] font-medium'>Дата рождения</Label>
                <Controller
                    name='birthday'
                    control={control}
                    render={({ field }) => (
                        <DayPicker
                            mode='single'
                            locale={ru}
                            selected={field.value}
                            onSelect={(d) => field.onChange(d?.toDateString())}
                            captionLayout='dropdown'
                            fromYear={1980}
                            toYear={new Date().getFullYear() - 16}
                            className='
                bg-card/80 backdrop-blur-xl
                rounded-3xl p-4
                border border-border/40
              '
                            classNames={{
                                selected:
                                    'bg-primary text-primary-foreground rounded-full shadow-sm',
                                caption_label: 'hidden',
                            }}
                        />
                    )}
                />
                {errors.birthday && (
                    <p className='text-sm text-destructive'>
                        {errors.birthday.message}
                    </p>
                )}
            </div>
        </Card>
    );
};
