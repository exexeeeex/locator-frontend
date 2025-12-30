import { NavigationItem } from ".";
import { useLinks } from "..";

export const Navigation = () => {
  const { links } = useLinks();

  return (
    <nav className='w-[calc(100%-20px)] h-[60px] fixed bottom-[10px] bg-card border-border border-[1.9px] rounded-xl left-1/2 -translate-x-1/2'>
      <ul className='list-none w-full h-full items-center flex justify-between pl-[10px] pr-[10px]'>
        {links.map((link) => (
          <NavigationItem key={link.id} link={link} />
        ))}
      </ul>
    </nav>
  );
};
