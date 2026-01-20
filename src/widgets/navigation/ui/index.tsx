import { NavigationItem } from ".";
import { useLinks } from "..";

export const Navigation = () => {
	const { links } = useLinks();

	return (
		<>
			<div
				className='
        		  fixed bottom-0 left-0 right-0 h-17
        		  bg-linear-to-t from-card/60 to-transparent
        		  pointer-events-none
        		  z-40
        		'
			/>

			<nav
				className='
        			fixed bottom-4 left-1/2 -translate-x-1/2
        			z-5
        			w-[calc(100%-24px)]
        			h-18
        			rounded-[24px]
    				bg-card/30 dark:bg-card/10
    				backdrop-blur-3xl
    				backdrop-saturate-150
    				border border-border/60
        		'
			>
				<ul className='flex h-full items-center justify-between px-5'>
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
