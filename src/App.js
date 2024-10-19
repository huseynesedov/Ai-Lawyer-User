import React from 'react';

import RouteList from './Components/Layout/Routes';
import Layout from './Components/Layout/MainLayout/index';
import Login from './Components/Pages/Login';

import { AuthProvider, useAuth } from './AuthContext';

import  {Spin} from 'antd'

function App() {
  const { loggedIn , loginLoading } = useAuth();


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