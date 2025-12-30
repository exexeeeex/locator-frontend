import { Icon } from ".";

interface UserLocationProps {
  location: string;
}

export const UserLocation: React.FC<UserLocationProps> = ({ location }) => (
  <div className='flex items-center gap-2 mt-[5px]'>
    <Icon
      icon={"pin"}
      size={16}
      color={"var(--muted-foreground)"}
      fill={""}
      stroke={"var(--muted-foreground)"}
    />
    <span className='text-muted-foreground'>{location}</span>
  </div>
);
