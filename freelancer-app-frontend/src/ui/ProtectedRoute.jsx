import { useEffect } from "react";
import useAuthorized from "../features/authentication/useAuthorized";
import Loading from "./Loading";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const { isLoading, isAuthenticate, isAuthorized, isVerified } =
    useAuthorized();

  useEffect(() => {
    if (!isAuthenticate && !Loading) navigate("/auth");
    if (!isVerified && !Loading) {
      toast.error("پروفایل شما هنوز تایید نشده است");
      navigate("/");
    }
    if (!isAuthorized && !Loading) navigate("/not-access", { replace: true });
  }, [isAuthorized, navigate, isAuthenticate, isLoading, isVerified]);

  if (Loading)
    return (
      <div className="flex items-center h-screen justify-center bg-secondary-100">
        <Loading />
      </div>
    );
  return children;
};

export default ProtectedRoute;
