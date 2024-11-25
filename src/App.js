import React, { useEffect } from 'react';
import { AuthProvider } from './AuthContext'; 
import RouteList from './Components/Layout/Routes';

function App() {
  useEffect(() => {
    const disableContextMenu = (e) => e.preventDefault();
    window.addEventListener('contextmenu', disableContextMenu);

    const disableKeys = (e) => {
      if (
        e.key === 'F12' || 
        (e.ctrlKey && e.shiftKey && e.key === 'I') || 
        (e.ctrlKey && e.shiftKey && e.key === 'J') || 
        (e.ctrlKey && e.key === 'U')
      ) {
        e.preventDefault();
      }
    };
    window.addEventListener('keydown', disableKeys);

    return () => {
      window.removeEventListener('contextmenu', disableContextMenu);
      window.removeEventListener('keydown', disableKeys);
    };
  }, []);

  return (
    <AuthProvider>
      <RouteList />
    </AuthProvider>
  );
}

export default App;
