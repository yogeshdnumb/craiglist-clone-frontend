import useAuth from "@/hooks/useAuth";
import { Outlet, useNavigate, Navigate } from "react-router";

export default function IsAutheticated() {
  const auth = useAuth();
  console.log(auth);

  const navigate = useNavigate();
  if (auth.isAuthenticated) {
    return <Outlet />;
  } else {
    // navigate("/login");
    return <Navigate to={"/login"}></Navigate>;
  }
}
