import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../Layout";
// import
// import

//pages

const RouteSection = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route></Route>
          <Route></Route>
          <Route></Route>
          <Route></Route>
          <Route></Route>
        </Route>
      </Routes>
    </>
  );
};

export default RouteSection;
