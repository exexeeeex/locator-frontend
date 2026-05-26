import { Layout } from "./layout";
import { createBrowserRouter } from "react-router-dom";

import { lazy, Suspense } from "react";
import { PublicRouteProvider } from "@/shared/providers";
import { NotFound } from "@/widgets/not-found";
import { Loader } from "@/shared/components/ui/loader";

const RegistrationPage = lazy(() =>
	import("@/pages/registration").then((module) => ({
		default: module.RegistrationPage,
	})),
);

const QuestionnairesPage = lazy(() =>
	import("@/pages/questionnaires").then((module) => ({
		default: module.QuestionnairesPage,
	})),
);

const MyProfilePage = lazy(() =>
	import("@/pages/my-profile").then((module) => ({
		default: module.MyProfilePage,
	})),
);

const UserProfilePage = lazy(() =>
	import("@/pages/user-profile").then((module) => ({
		default: module.UserProfilePage,
	})),
);

const SympathiesPage = lazy(() =>
	import("@/pages/sympathies").then((module) => ({
		default: module.SympathiesPage,
	})),
);

const SubscribePage = lazy(() =>
	import("@/pages/subscribe").then((module) => ({
		default: module.SubscribePage,
	})),
);

const withSuspense = (component: React.ReactNode) => (
	<Suspense fallback={<Loader />}>{component}</Suspense>
);

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		errorElement: <NotFound />,
		children: [
			{
				index: true,
				element: withSuspense(<QuestionnairesPage />),
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
				element: withSuspense(<MyProfilePage />),
			},
			{
				path: "/profile/:id",
				element: withSuspense(<UserProfilePage />),
			},
			{
				path: "/sympathies",
				element: withSuspense(<SympathiesPage />),
			},
			{
				path: "/questionnaires",
				element: withSuspense(<QuestionnairesPage />),
			},
			{
				path: "/subscribe",
				element: <SubscribePage />,
			},
		],
	},
]);
