import { useMyProfile } from "@/features/profile";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface PublicRouteProps {
  children: React.ReactNode;
}

export const PublicRouteProvider: React.FC<PublicRouteProps> = ({
  children,
}) => {
  const { profile, isLoading, error } = useMyProfile();
  const navigate = useNavigate();

  useEffect(() => {
    if (profile && !error) navigate("/profile", { replace: true });
  }, [profile, navigate, error]);

  if (isLoading) return <h1>Loading..</h1>;

  return <>{children}</>;
};
