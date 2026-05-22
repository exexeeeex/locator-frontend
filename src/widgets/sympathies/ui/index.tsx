import { useSympathiesNavigation } from "../model";
import { SympathiesLikes } from "./likes";
import { SympathiesMatches } from "./matches";
import { SympathiesNavigation } from "./navigation";

export const Sympathies: React.FC = () => {
	const { activeLink, switchPage, links } = useSympathiesNavigation();

	return (
		<section className='h-full flex flex-col'>
			<div>
				<SympathiesNavigation
					links={links}
					activePage={activeLink}
					onSwitch={switchPage}
				/>
			</div>
			<section className='mt-10'>
				{activeLink === "matches" ? <SympathiesMatches /> : <SympathiesLikes />}
			</section>
		</section>
	);
};
