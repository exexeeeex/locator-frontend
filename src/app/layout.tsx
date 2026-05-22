import { Outlet } from "react-router-dom";
import { Navigation } from "@/widgets/navigation";
import { useTelegramBackButton } from "@/shared/platform/telegram";

export const Layout = () => {
	useTelegramBackButton();
	return (
		<section className='w-full h-full'>
			<Outlet />

			<Navigation />
		</section>
	);
};
