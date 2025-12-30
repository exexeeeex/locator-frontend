import { MyProfileBody, MyProfileHeader } from ".";

export const MyProfile: React.FC = () => {
  return (
    <section className='bg-card rounded-xl min-h-[90vh]'>
      <MyProfileHeader />
      <MyProfileBody />
    </section>
  );
};
