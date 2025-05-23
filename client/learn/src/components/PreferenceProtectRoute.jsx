// eslint-disable-next-line no-unused-vars
import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PreferenceProtectRoute = () => {
  const { preferences } = useSelector((state) => state.auth);
  // console.log(preferences);

  if (preferences.length > 0) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
};

export default PreferenceProtectRoute;
