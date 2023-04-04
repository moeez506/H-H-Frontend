/* eslint-disable prettier/prettier */

import { Navigate, Outlet } from "react-router-dom";
import * as React from 'react';



const ProtectedRoutes = () => {
  const isAuth = localStorage.getItem("auth-token")
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;