import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../Layout";
import RestrictedRoute from "../RestrictedRoute";
import PrivateRoute from "../PrivateRoute";

//pages

const RouteSection = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route>Home</Route>
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                // component={<Register />}
              />
            }
          ></Route>
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                //   component={<Login />}
              />
            }
          ></Route>
          <Route
            path="/contacts"
            element={
              <PrivateRoute
                redirectTo="/login"
                //   component={<Contacts />}
              />
            }
          />
          <Route
            path="*"
            //   element={<NotFoundPage />}
          />
        </Route>
      </Routes>
    </>
  );
};

export default RouteSection;
