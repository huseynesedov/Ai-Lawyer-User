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
import Bloq from "../../Pages/Bloq";
import Chat from "../../Pages/Chat";
import Kontakt from "../../Pages/Kontakt";
import Otp from "../../Pages/Login/otp";
import ResetPassword from "../../Pages/Login/resetPassword";
import NewChat from "../../Pages/NewChat";
import BloqDetails from "../../Pages/Bloqdetails";
import PrivateRoute from "./PrivateRoute";

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
          path="/Bloq-details"
          element={
            <>
              <Header />
              <BloqDetails />
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
          path="/Otp"
          element={
            <Spin spinning={loginLoading} tip="Loading...">
              <Otp />
            </Spin>
          }
        />
        <Route
          path="/resetPassword"
          element={
            <Spin spinning={loginLoading} tip="Loading...">
              <ResetPassword />
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

        <Route element={<PrivateRoute />}>
          <Route
            path="/Chat"
            element={
              <>
                <Chat />
              </>
            }
          />
          
          <Route
            path="/NewChat"
            element={
              <>
                <NewChat />
              </>
            }
          />
        </Route>
      </Routes>
    </>
  );
};

export default RouteList;
