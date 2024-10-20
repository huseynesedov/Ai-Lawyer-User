import React, { createContext, useState, useContext, useEffect } from 'react';
import { AccountApi } from "./api/account.api";
import { notification } from 'antd';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);

  const openNotification = (message, description, error) => {
    if (error) {
      notification.error({
        message,
        description,
        placement: 'topRight'
      });
    } else {
      notification.info({
        message,
        description,
        placement: 'topRight'
      });
    }
  };

  useEffect(() => {
    const storedLoggedIn = localStorage.getItem('loggedIn');
    if (storedLoggedIn) {
      setLoggedIn(JSON.parse(storedLoggedIn));
    } else {
      setLoggedIn(false);
    }
    setLoading(false);
  }, []);

  const login = (userName, password) => {
    setLoginLoading(true);

    return AccountApi.Login({ userName, password })
      .then((res) => {
        console.log(res);
        setLoggedIn(true);
        localStorage.setItem('loggedIn', true);
        localStorage.setItem('token', res.token);
      })
      .catch((error) => {
        setLoggedIn(false);
        openNotification('Xəta baş verdi', error.response?.data?.message || 'Bilinməyən xəta', true);
      })
      .finally(() => {
        setLoginLoading(false);
      });
  };

  const register = (fullName, lastName, userName, email, password, rePassword, navigate) => {
    setLoginLoading(true);
  
    return AccountApi.register({ fullName, lastName, userName, email, password, rePassword })
      .then((res) => {
        console.log(res);
        setLoggedIn(true);

        navigate('/Login', { state: { userName } });
      })
      .finally(() => {
        setLoginLoading(false);
      });
  };

  const logout = () => {
    setLoggedIn(false);
    localStorage.removeItem('loggedIn');
  };

  const googleLogin = async (params) => {
    setLoginLoading(true);
    try {
      const response = await AccountApi.googleLogin(params);
      console.log("Google Login Response:", response);
      setLoggedIn(true);
      localStorage.setItem('Google loggedIn', true);
      localStorage.setItem('Google token', response.data.token); // Token'ı localStorage'a kaydediyoruz
      openNotification('Giriş Başarılı', 'Google ile giriş yapıldı.', false);
    } catch (error) {
      setLoggedIn(false);
      openNotification('Giriş Hatası', error.response?.data?.message || 'Google ile giriş yapılırken hata oluştu.', true);
    } finally {
      setLoginLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ loggedIn, loading, loginLoading, login, register, logout, googleLogin, openNotification }}>
      {children}
    </AuthContext.Provider>
  );
};
