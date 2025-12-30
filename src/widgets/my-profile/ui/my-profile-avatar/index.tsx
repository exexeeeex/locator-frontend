import { useMyProfile } from "@/features/profile";

export const MyProfileAvatar: React.FC = () => {
  const { userMedias } = useMyProfile();

  const avatar = (): string => {
    if (userMedias)
      return userMedias.length >= 1
        ? `http://localhost:5000/${userMedias[0].link}`
        : "";
    return "";
  };

  return (
    <img
      src={avatar() ?? null}
      alt='user-avatar'
      className='bg-primary max-w-[170px] max-h-[170px] min-h-[170px] border-4 border-primary rounded-full w-full h-full object-center object-cover'
    />
  );
};
