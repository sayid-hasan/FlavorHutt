import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  const foodDetails = location?.state || null;

  if (loading)
    return (
      <>
        <p>wait</p>
      </>
    );
  if (user) {
    return children;
  }
  return (
    <Navigate
      to="/login"
      state={{ from: location.pathname, foodDetails }}
    ></Navigate>
  );
};

export default PrivateRoute;
