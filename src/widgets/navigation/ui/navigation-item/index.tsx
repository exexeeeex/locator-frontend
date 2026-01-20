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
        		  w-16 h-14
        		  rounded-2xl
        		  transition-all duration-300
        		  ${
								isActive
									? "bg-primary/10 text-primary"
									: "text-muted-foreground hover:text-foreground"
							}	
        		`
			}
		>
			<Icon
				icon={link.icon}
				size={24}
				stroke='currentColor'
				fill='none'
				className='transition-transform duration-300 group-hover:scale-105'
				color={""}
			/>

			<span
				className='
        		  mt-1 text-[11px] font-medium tracking-tight
        		  transition-colors
        		'
			>
				{link.name}
			</span>
		</NavLink>
	);
};
