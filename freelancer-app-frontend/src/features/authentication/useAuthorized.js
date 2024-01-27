import { useLocation } from "react-router-dom";
import useUser from "./useUser";
const useAuthorized = () => {
  const { pathname } = useLocation();
  const { user, isLoading } = useUser();

  let isAuthorized = false;

  let isAuthenticate = false;
  if (user) isAuthenticate = true;

  const ROLES = {
    admin: "ADMIN",
    owner: "OWNER",
    freelancer: "FREELANCER",
  };

  const desiredRole = pathname.split("/").at(1);
  if (Object.keys(ROLES).include(desiredRole)) {
    if (user && user.role === ROLES[desiredRole]) isAuthorized = true;
  }

  return { isLoading, user, isAuthenticate, isAuthorized };
};

export default useAuthorized;
