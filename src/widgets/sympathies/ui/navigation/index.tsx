import type { SympathiesLink, SympathiesPage } from "../../model/types";

type SympathiesNavigationProps = {
	links: SympathiesLink[];
	activePage: SympathiesPage;
	onSwitch: (page: SympathiesPage) => void;
};

export const SympathiesNavigation: React.FC<SympathiesNavigationProps> = ({
	links,
	activePage,
	onSwitch,
}) => {
	return (
		<nav
			className='
        fixed top-5 left-1/2 -translate-x-1/2
        z-50

        w-[calc(100%-140px)]
        h-11

        rounded-full
        bg-card/90 
        backdrop-blur-2xl
        backdrop-saturate-150

        border border-border/50
        shadow-sm

        flex items-center
        p-1
      '
		>
			{links.map((link) => {
				const isActive = activePage === link.page;

				return (
					<li
						key={link.page}
						onClick={() => onSwitch(link.page)}
						className={`
              relative
              flex-1 h-full
              justify-center items-center flex
              rounded-full
              list-none
              text-sm font-medium tracking-tight

              transition-all duration-300 ease-out
              active:scale-95

              ${
								isActive
									? `
                    bg-primary/15
                    text-primary
                  `
									: `
                    text-muted-foreground
                    hover:text-foreground
                  `
							}
            `}
					>
						{link.name}
					</li>
				);
			})}
		</nav>
	);
};
