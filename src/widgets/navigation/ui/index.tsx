import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { NavigationItem } from ".";
import { useLinks } from "..";
import { Icon } from "@shared/components";

export const Navigation = () => {
	const { links } = useLinks();
	const location = useLocation();
	const [isExpanded, setIsExpanded] = useState(false);

	useEffect(() => {
		setIsExpanded(false);
	}, [location.pathname]);

	return (
		<>
			<div
				className={`
          fixed bottom-0 left-0 right-0 h-14
          bg-linear-to-t from-card/50 to-transparent
          pointer-events-none z-40
          transition-opacity duration-300
          ${isExpanded ? "opacity-100" : "opacity-0"}
        `}
			/>

			<nav
				onClick={() => !isExpanded && setIsExpanded(true)}
				className={`
          fixed bottom-3 left-1/2 -translate-x-1/2
          z-50 h-14
          rounded-full
          bg-accent/10 
          backdrop-blur-2xl backdrop-saturate-150
          border border-border/50 shadow-sm
          overflow-hidden
          transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]
          
          ${
						isExpanded
							? "w-[calc(100%-102px)] cursor-default"
							: "w-14 cursor-pointer hover:bg-card/60 hover:scale-105 active:scale-95"
					}
        `}
			>
				<div
					className={`
            absolute inset-0 flex items-center justify-center
            transition-all duration-300
            ${isExpanded ? "opacity-0 scale-50 pointer-events-none" : "opacity-100 scale-100"}
          `}
				>
					<Icon
						icon='fire'
						size={24}
						className='text-primary/90 '
						color={"none"}
						fill={"currentColor"}
						stroke={"none"}
					/>
				</div>

				<div
					className={`
            h-full w-full min-w-75
            transition-all duration-300
            ${isExpanded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}
          `}
				>
					<ul className='flex h-full items-center justify-between px-1'>
						{links.map((link) => (
							<NavigationItem
								key={link.id}
								link={link}
							/>
						))}
					</ul>
				</div>
			</nav>

			{isExpanded && (
				<div
					className='fixed inset-0 z-40'
					onClick={() => setIsExpanded(false)}
				/>
			)}
		</>
	);
};
