import React from "react";
import { Route, Navigate } from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout";

const PrivateRoutes = ({ children, ...rest }) => {
  const isAuthenticate = true;

  return (
    <Route
      {...rest}
      render={() =>
        isAuthenticate ? (
          <DefaultLayout>{children}</DefaultLayout>
        ) : (
          <Navigate to="/" />
        )
      }
    />
  );
};

export default PrivateRoutes;
