import { MyProfileAvatar } from "..";

export const MyProfileHeader: React.FC = () => {
  return (
    <header>
      <section className='w-full mt-[10px]'>
        <div className='h-[150px] bg-primary rounded-md'></div>
        <div className='mt-[-100px] ml-[20px]'>
          <MyProfileAvatar />
        </div>
      </section>
    </header>
  );
};
