import { Route, Routes } from "react-router-dom";
import React from "react";
import { Spin } from "antd";
import { useAuth } from "../../../AuthContext";

import Header from "../../Layout/Header/index";
import Footer from "../../Layout/Footer/index";

import Home from "../../Pages/Home";
import Faq from "../../Pages/Faq";
import Login from "../../Pages/Login/login";
import Register from "../../Pages/Login/user-create";
import Forgot from "../../Pages/Login/forgot";
import Mail from "../../Pages/Login/mailcontrol";
import Bloq from "../../Pages/Bloq";
import Chat from "../../Pages/Chat";
import Kontakt from "../../Pages/Kontakt";


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
          path="/Bloq"
          element={
            <>
              <Header />
              <Bloq />
              <Footer />
            </>
          }
        />
        <Route
          path="/Kontakt"
          element={
            <>
              <Header />
              <Kontakt />
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
        <Route
          path="/Chat"
          element={
            <Spin spinning={loginLoading} tip="Loading...">
              <Chat />
            </Spin>
          }
        />
      </Routes>
    </>
  );
}

export default RouteList;
