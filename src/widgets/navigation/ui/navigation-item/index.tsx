import { NavLink } from "react-router-dom";
import type { NavigationLink } from "../..";
import { Icon } from "@shared/components";

interface NavigationItemProp {
  link: NavigationLink;
}

export const NavigationItem: React.FC<NavigationItemProp> = ({ link }) => {
  return (
    <NavLink
      to={`/${link.linkTo}`}
      className={({ isActive, isPending }) =>
        `
        group h-[calc(100%-7px)] rounded-lg
        flex items-center p-2 transition-colors

        ${isActive ? "text-primary" : "text-muted-foreground"}
        ${isPending ? "opacity-60" : ""}
        `
      }
    >
      <div className='flex flex-col items-center gap-1'>
        <Icon
          color='currentColor'
          icon={link.icon}
          size={24}
          stroke='currentColor'
          fill='none'
          className='
            transition-colors
            group-hover:text-primary
            group-[.active]:text-primary
          '
        />

        <p
          className='
            text-[12px] font-semibold transition-colors
            group-hover:text-primary
            group-[.active]:text-primary
          '
        >
          {link.name}
        </p>
      </div>
    </NavLink>
  );
};
