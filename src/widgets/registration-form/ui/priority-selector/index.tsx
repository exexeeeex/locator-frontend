import { Card } from '@/shared/components/ui/card';
import type { FC } from 'react';
import { RegistrationFormHeader } from '../form-header';
import { Settings2 } from 'lucide-react';
import { Label } from '@radix-ui/react-label';
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from '@/shared/components/ui/input-otp';
import { REGEXP_ONLY_DIGITS } from 'input-otp';
import { useRegistrationPriority } from '@/features/registration';
import type { RegistrationPriorityProps } from '@shared/types';

export const RegistrationPrioritySelector: FC<RegistrationPriorityProps> = ({
    setValue,
    control,
}) => {
    const {
        purposes,
        purposesFetchError,
        preferredGender,
        minAge,
        maxAge,
        purposeId,
    } = useRegistrationPriority(control);

    return (
        <Card className='w-full bg-card border rounded-3xl mb-2.5 border-border p-5'>
            <RegistrationFormHeader
                label='Настройки поиска'
                icon={<Settings2 size={20} color='white' />}
            />
            <div>
                <Label className='text-lg font-semibold'>
                    Что хочешь найти?
                </Label>
                {!purposesFetchError ? (
                    <section className='flex flex-wrap mt-[10px] gap-[10px]'>
                        {purposes?.map((purpose) => (
                            <Card
                                onClick={() =>
                                    setValue('purposeId', purpose.id)
                                }
                                className={`${
                                    purposeId === purpose.id
                                        ? 'bg-card border-2 border-primary'
                                        : 'bg-background'
                                } text-center hover:bg-card  
                  h-[50px] duration-300 transition-colors flex items-center justify-center flex-[1_1_calc(50%-5px)] min-w-[calc(50%-5px)]`}
                                key={purpose.id}
                            >
                                <h2 className='cursor-pointer'>
                                    {purpose.name}
                                </h2>
                            </Card>
                        ))}
                    </section>
                ) : (
                    <h3>Ошибка получения данных..</h3>
                )}
            </div>
            <div>
                <Label className='text-lg font-semibold'>
                    Кого хочешь найти?
                </Label>
                <section className='flex flex-wrap mt-[10] gap-[10px]'>
                    <Card
                        onClick={() => setValue('preferredGender', 'female')}
                        className={`${
                            preferredGender === 'female'
                                ? 'bg-card border-2 border-primary'
                                : 'bg-background'
                        } text-center hover:bg-card 
              h-[50px] duration-300 transition-colors flex items-center justify-center flex-[1_1_calc(50%-5px)] min-w-[calc(50%-5px)]`}
                    >
                        <h2 className='cursor-pointer'>Девушку</h2>
                    </Card>
                    <Card
                        onClick={() => setValue('preferredGender', 'male')}
                        className={`${
                            preferredGender === 'male'
                                ? 'bg-card border-2 border-primary'
                                : 'bg-background'
                        } text-center hover:bg-card 
            h-[50px] duration-300 transition-colors flex items-center justify-center flex-[1_1_calc(50%-5px)] min-w-[calc(50%-5px)]`}
                    >
                        <h2 className='cursor-pointer'>Мужчину</h2>
                    </Card>
                </section>
            </div>
            <div>
                <Label className='text-lg font-semibold'>
                    Возраст поиска{' '}
                    <span className='text-sm font-regular'>(от-до)</span>
                </Label>
                <div className='flex items-center justify-between'>
                    <div>
                        <InputOTP
                            value={minAge}
                            onChange={(e: string) => setValue('minAge', e)}
                            pattern={REGEXP_ONLY_DIGITS}
                            maxLength={2}
                        >
                            <InputOTPGroup>
                                <InputOTPSlot
                                    style={{
                                        outline: 'none',
                                        boxShadow: 'none',
                                        WebkitTapHighlightColor: 'transparent',
                                    }}
                                    className='focus-visible:ring-0 border-border text-3xl w-[50px] h-[50px] bg-background transition-colors duration-300 focus-visible:bg-card'
                                    index={0}
                                />
                                <InputOTPSlot
                                    style={{
                                        outline: 'none',
                                        boxShadow: 'none',
                                        WebkitTapHighlightColor: 'transparent',
                                    }}
                                    className='focus-visible:ring-0 text-3xl w-[50px] h-[50px] border-border bg-background transition-colors duration-300 focus-visible:bg-card'
                                    index={1}
                                />
                            </InputOTPGroup>
                        </InputOTP>
                    </div>
                    <div className='w-full h-[2px] bg-border'></div>
                    <div>
                        <InputOTP
                            value={maxAge}
                            onChange={(e: string) => setValue('maxAge', e)}
                            pattern={REGEXP_ONLY_DIGITS}
                            maxLength={2}
                        >
                            <InputOTPGroup>
                                <InputOTPSlot
                                    style={{
                                        outline: 'none',
                                        boxShadow: 'none',
                                        WebkitTapHighlightColor: 'transparent',
                                    }}
                                    className='focus-visible:ring-0 border-border text-3xl w-[50px] h-[50px] bg-background transition-colors duration-300 focus-visible:bg-card'
                                    index={0}
                                />
                                <InputOTPSlot
                                    style={{
                                        outline: 'none',
                                        boxShadow: 'none',
                                        WebkitTapHighlightColor: 'transparent',
                                    }}
                                    className='focus-visible:ring-0 text-3xl w-[50px] h-[50px] border-border bg-background transition-colors duration-300 focus-visible:bg-card'
                                    index={1}
                                />
                            </InputOTPGroup>
                        </InputOTP>
                    </div>
                </div>
            </div>
        </Card>
    );
};
