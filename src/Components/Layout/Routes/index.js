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
import Mail from "../../Pages/Login/mailcontrol";
import Faq from "../../Pages/Faq";

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
          path="/Faq"
          element={
            <>
              <Header />
              <Faq />
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
        <Route
          path="/VerifyMail"
          element={
            <Spin spinning={loginLoading} tip="Loading...">
              <Mail />
            </Spin>
          }
        />
      </Routes>
    </>
  );
}

export default RouteList;
