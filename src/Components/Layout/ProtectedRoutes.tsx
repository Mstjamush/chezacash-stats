import { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Cookies from "universal-cookie";
import { User } from "../../Models/users";

const ProtectedRoutes: FC = () => {
  let cookies = new Cookies();
  let user: User = cookies.get("user") || { username: "", isAdmin: false };

  if (!user || user.username == "") {
    return <Navigate to={"/login"} replace />;
  }
  return <Outlet />;
};

export default ProtectedRoutes;
