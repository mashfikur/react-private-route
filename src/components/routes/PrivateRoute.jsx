import { useContext } from "react";
import { AuthContext } from "../../AuthProvider";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user,loading } = useContext(AuthContext);

  if(loading){
    return <span className=" w-1/12 loading loading-spinner text-warning"></span>
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" ></Navigate>;
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;
