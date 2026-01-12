import { Card, Icon } from '@/shared/components';

interface ProfileAboutProps {
    about: string;
}

export const ProfileAbout: React.FC<ProfileAboutProps> = ({ about }) => (
    <Card className='bg-background gap-2 p-3 text-wrap rounded-xl'>
        <header className='flex items-center gap-2'>
            <Icon
                icon={'profile'}
                size={24}
                color={'var(--foreground)'}
                fill={''}
                stroke={'var(--foreground)'}
            />
            <span className='font-semibold'>Обо мне</span>
        </header>
        <div>
            <span className='whitespace-pre-wrap wrap-break-word'>{about}</span>
        </div>
    </Card>
);
