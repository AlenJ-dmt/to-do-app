import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/user/userSlice";

const PrivateRoute = ({ component, ...props }) => {
  const Component = component;

  const user = useSelector(selectUser);

  return (
    <Route
      {...props}
      render={(componentProps) =>
        user ? (
          <Component {...componentProps} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: componentProps.location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
