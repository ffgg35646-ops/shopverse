import { Navigate, useLocation } from "react-router-dom";

import { useSelector } from "react-redux";

import type { RootState } from "@/store";


interface ProtectedRouteProps {
  children: React.ReactNode;
}


const ProtectedRoute = ({
  children
}: ProtectedRouteProps) => {

  const location = useLocation();


  const isAuthenticated =
    useSelector(
      (state: RootState) =>
        state.user.isAuthenticated
    );


  if (!isAuthenticated) {

    return (
      <Navigate
        to="/login"
        replace
        state={{
          from: location
        }}
      />
    );

  }


  return children;

};


export default ProtectedRoute;
