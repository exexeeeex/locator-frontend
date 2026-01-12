import { Card } from '@/shared/components/ui/card';
import { useRef, type FC } from 'react';
import { RegistrationFormHeader } from '../form-header';
import { Camera, Upload } from 'lucide-react';
import type { RegistrationPhotoProps } from '@/shared/types';

export const RegistrationPhoto: FC<RegistrationPhotoProps> = ({
    onFileChange,
    files,
}) => {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <>
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
                    label='Фотографии'
                    icon={<Camera size={18} color='white' />}
                />

                <div
                    onClick={() => inputRef.current?.click()}
                    className='
            h-48 rounded-3xl
            bg-muted/40
            flex flex-col items-center justify-center gap-2
            text-muted-foreground
            active:scale-[0.98]
            transition
          '
                >
                    <Upload size={48} />
                    <span className='font-medium'>Загрузить фото</span>
                    <span className='text-sm'>До 6 изображений</span>
                </div>

                <div className='mt-4 flex flex-wrap gap-3'>
                    {files.map((file, i) => (
                        <img
                            key={i}
                            src={URL.createObjectURL(file)}
                            className='
                w-[120px] h-[120px]
                rounded-2xl object-cover
                shadow-sm
              '
                        />
                    ))}
                </div>
            </Card>

            <input
                ref={inputRef}
                type='file'
                multiple
                accept='image/*'
                hidden
                onChange={onFileChange}
            />
        </>
    );
};
