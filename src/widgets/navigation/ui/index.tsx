import { NavigationItem } from ".";
import { useLinks } from "..";

export const Navigation = () => {
	const { links } = useLinks();

	return (
		<>
			<div
				className='
        		  fixed bottom-0 left-0 right-0 h-14
        		  bg-linear-to-t from-card/50 to-transparent
        		  pointer-events-none
        		  z-40
        		'
			/>

			<nav
				className='
        		  fixed bottom-3 left-1/2 -translate-x-1/2
        		  z-50

        		  w-[calc(100%-102px)]
        		  h-14

        		  rounded-full
        		  bg-card/40 dark:bg-card/20
        		  backdrop-blur-2xl
        		  backdrop-saturate-150

        		  border border-border/50
        		  shadow-sm
        		'
			>
				<ul className='flex h-full items-center justify-between px-1'>
					{links.map((link) => (
						<NavigationItem
							key={link.id}
							link={link}
						/>
					))}
				</ul>
			</nav>
		</>
	);
};
