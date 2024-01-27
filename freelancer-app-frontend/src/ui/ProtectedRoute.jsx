import { useEffect } from "react";
import useAuthorized from "../features/authentication/useAuthorized";
import Loading from "./Loading";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const { isLoading, isAuthenticate, isAuthorized } = useAuthorized();

  useEffect(() => {
    if (!isAuthenticate && !Loading) navigate("/auth");
    if (!isAuthorized && !Loading) navigate("/not-access", { replace: true });
  }, [isAuthorized, navigate, isAuthenticate, isLoading]);

  if (Loading)
    return (
      <div className="flex items-center h-screen justify-center bg-secondary-100">
        <Loading />
      </div>
    );
  return children;
};

export default ProtectedRoute;
