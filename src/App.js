import React from 'react';

import RouteList from './Components/Layout/Routes';
import Layout from './Components/Layout/MainLayout/index';
import Login from './Components/Pages/Login';

import { AuthProvider } from './AuthContext';

import { Spin } from 'antd';

function App() {
  const loggedIn = true; 
  const loginLoading = false; 

  return (
    <>
      {loggedIn ? (
        <Layout>
          <RouteList />
        </Layout>
      ) : (
        <Spin spinning={loginLoading} tip="Loading...">
          <Login />
        </Spin>
      )}
    </>
  );
}

export default function WrappedApp() {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
}
