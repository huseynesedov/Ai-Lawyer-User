import React from 'react';
import { AuthProvider } from './AuthContext'; // AuthProvider'ı burada ekliyoruz
import RouteList from './Components/Layout/Routes';

function App() {
  return (
    <AuthProvider>
      <RouteList /> 
    </AuthProvider>
  );
}

export default App;
