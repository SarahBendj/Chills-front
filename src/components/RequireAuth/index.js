import { useLocation,Navigate, Outlet } from "react-router-dom";
import useAuth from "../Hook/useAuth";

const RequiredAuth = () => {
  const { auth } = useAuth();
  const location = useLocation();

  return (
    auth?.token ? <Outlet /> 
                : <Navigate to='/login' state = {{ from: location }} replace />
  );
}

export default RequiredAuth;

