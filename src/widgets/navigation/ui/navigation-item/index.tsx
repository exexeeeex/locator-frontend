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
			className={({ isActive }) =>
				`
          flex flex-col items-center justify-center
          w-18 h-12 flex-shrink-0
          rounded-full
          transition-all duration-200 ease-out
          ${
						isActive
							? "bg-primary/15 text-primary"
							: "text-muted-foreground hover:text-foreground"
					}
        `
			}
		>
			<Icon
				icon={link.icon}
				size={20}
				className='transition-transform duration-200'
			/>

			<span className='mt-0.5 text-[10px] font-medium tracking-tight'>
				{link.name}
			</span>
		</NavLink>
	);
};
