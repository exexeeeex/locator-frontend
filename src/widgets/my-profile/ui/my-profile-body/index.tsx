import { getUserAge } from "@/entities/user";
import { useMyProfile } from "@/features/profile";
import { UserLocation } from "@/shared/components";
import { ProfileAbout } from "..";
import { Error } from "@/shared/components";

export const MyProfileBody: React.FC = () => {
  const { profile, city } = useMyProfile();

  if (!profile) return <Error message={"Профиль не найден"} />;
  if (!city) return <Error message={"Ошибка получения информации профиля"} />;

  const age: number = getUserAge(profile?.birthday ?? "");

  return (
    <div className='p-[20px_20px]'>
      <div className='flex items-center gap-1'>
        <h2 className='text-2xl font-semibold'>{profile.username},</h2>
        <span className='text-xl mt-[5px] font-semibold text-foreground/60'>
          {age === 0 ? "Неизвестно" : age}
        </span>
      </div>
      <div>
        <UserLocation location={`${city.name}, ${city.region.name}`} />
      </div>
      <div className='mt-[20px]'>
        <ProfileAbout about={profile.about} />
      </div>
    </div>
  );
};
