import { MainPage } from "@/pages/main";
import { Layout } from "./layout";
import { createBrowserRouter } from "react-router-dom";
import { RegistrationPage } from "@/pages/registration";
import { PublicRouteProvider } from "@/shared/providers";
import { MyProfilePage } from "@/pages/my-profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <MainPage />,
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
    ],
  },
]);
