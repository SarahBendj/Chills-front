import { useLocation,Navigate, Outlet } from "react-router-dom";
import useAuth from "../Hook/useAuth";

const RequiredAuth = () => {
  const { auth } = useAuth();
  const location = useLocation();

  return (
    auth?.email
        ? <Outlet />
        : <Navigate to='/login' state = {{ FormData: location }} replace />
  );
}

export default RequiredAuth;

