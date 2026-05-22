import { Layout } from "./layout";
import { createBrowserRouter } from "react-router-dom";
import { RegistrationPage } from "@/pages/registration";
import { PublicRouteProvider } from "@/shared/providers";
import { MyProfilePage } from "@/pages/my-profile";
import { SympathiesPage } from "@/pages/sympathies/ui";
import { NotFound } from "@/widgets/not-found";
import { UserProfilePage } from "@/pages/user-profile";
import { SubscribePage } from "@/pages/subscribe";
import { QuestionnairesPage } from "@/pages/questionnaires";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		errorElement: <NotFound />,
		children: [
			{
				path: "/",
				element: <QuestionnairesPage />,
			},
			{
				path: "/registration",
				element: (
					<PublicRouteProvider>
						<RegistrationPage />
					</PublicRouteProvider>
				),
			},
			{
				path: "/profile",
				element: <MyProfilePage />,
			},
			{
				path: "/profile/:id",
				element: <UserProfilePage />,
			},
			{
				path: "/sympathies",
				element: <SympathiesPage />,
			},
			{
				path: "/questionnaires",
				element: <QuestionnairesPage />,
			},
			{
				path: "/subscribe",
				element: <SubscribePage />,
			},
		],
	},
]);
