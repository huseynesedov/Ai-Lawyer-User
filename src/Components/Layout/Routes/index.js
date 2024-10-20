import { Route, Routes } from "react-router-dom";
import React from "react";

import Home from "../../Pages/Home";
import Login from "../../Pages/Login/login";
import Register from "../../Pages/Login/user-create";
import Header from "../../Layout/Header/index";
import Footer from "../../Layout/Footer/index";
import { Spin } from "antd";
import { useAuth } from "../../../AuthContext";
import Forgot from "../../Pages/Login/forgot";

const RouteList = () => {
  const { loginLoading } = useAuth();

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
              <Footer />
            </>
          }
        />
        <Route
          path="/Login"
          element={
            <Spin spinning={loginLoading} tip="Loading...">
              <Login />
            </Spin>
          }
        />
        <Route
          path="/Register"
          element={
            <Spin spinning={loginLoading} tip="Loading...">
              <Register />
            </Spin>
          }
        />
        <Route
          path="/ForgotPassword"
          element={
            <Spin spinning={loginLoading} tip="Loading...">
              <Forgot />
            </Spin>
          }
        />
      </Routes>
    </>
  );
}

export default RouteList;
