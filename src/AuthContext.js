import React, { createContext, useState, useContext, useEffect } from 'react';
import { AccountApi } from './api/account.api';
import { notification } from 'antd';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loginLoading, setLoginLoading] = useState(false);
  const [remainingTime, setRemainingTime] = useState(0);

  const navigate = useNavigate();

  const openNotification = (message, description, error = false) => {
    notification[error ? 'error' : 'info']({
      message,
      description,
      placement: 'topRight',
    });
  };

  useEffect(() => {
    const storedLoggedIn = localStorage.getItem('loggedIn');
    const storedExpiration = localStorage.getItem('tokenExpiration');

    if (storedLoggedIn && storedExpiration) {
      const currentTime = new Date().getTime();
      if (currentTime > storedExpiration) {
        logout();
      } else {
        setLoggedIn(true);
        const remaining = (storedExpiration - currentTime) / 1000;
        setRemainingTime(remaining);

        const countdownInterval = setInterval(() => {
          setRemainingTime((prevTime) => {
            if (prevTime <= 1) {
              clearInterval(countdownInterval);
              logout();
              return 0;
            }
            return prevTime - 1;
          });
        }, 1000);
      }
    } else {
      setLoggedIn(false);
    }

    setLoading(false);
  }, []);

  const login = async (userName, password) => {
    setLoginLoading(true);
    try {
      const res = await AccountApi.Login({ userName, password });
      const expirationTime = new Date().getTime() + 2 * 60 * 60 * 1000;
      const remaining = (expirationTime - new Date().getTime()) / 1000;

      setLoggedIn(true);
      localStorage.setItem('loggedIn', true);
      localStorage.setItem('token', res.token);
      localStorage.setItem('tokenExpiration', expirationTime);

      setRemainingTime(remaining);
      const countdownInterval = setInterval(() => {
        setRemainingTime((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(countdownInterval);
            logout();
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);

      navigate('/');
    } catch (error) {
      if (error.response) {
        const { status } = error.response;
        let message = 'Giriş Xətası';
        let description = 'Yenidən cəhd edin.';
        navigate('/Login');

        if (status === 400) {
          description = 'Yanlış e-poçt və ya parol, yenidən cəhd edin.';
        } else if (status === 409) {
          description = 'Bu hesabla daxil olmaq mümkün olmadı, yenidən cəhd edin.';
        } else {
          description = 'Giriş xətası, yenidən cəhd edin.';
        }

        openNotification(message, description, true);
      } else {
        openNotification('Giriş xətası', 'Xəta baş verdi, lütfən, yenidən cəhd edin.', true);
      }
    } finally {
      setLoginLoading(false);
    }
  };

  const register = async (fullName, lastName, userName, email, password, rePassword) => {
    setLoginLoading(true);
    try {
      const res = await AccountApi.register({ fullName, lastName, userName, email, password, rePassword });
      setLoggedIn(true);
      localStorage.setItem('loggedIn', true);
      notification.success({
        message: 'Uğurlu',
        description: 'Doğrulama e-postası göndərildi. Zəhmət olmasa e-postanızı yoxlayın!',
      });
      navigate('/Login');
    } catch (error) {
      setLoggedIn(false);
      navigate('/Register');

      if (error.response) {
        const { status } = error.response;
        let message = 'Qeydiyyat xətası';
        let description = 'Bir hata oluştu, lütfen tekrar deneyin.';

        if (status === 409) {
          description = 'Bu istifadəçi adı və ya email artıq mövcuddur.';
        } else if (status === 200) {
          description = 'Doğrulama e-postası göndərildi. Zəhmət olmasa e-postanızı yoxlayın!';
        }

        openNotification(message, description, true);
      } else {
        openNotification('Qeydiyyat xətası', 'Bir hata oluştu, lütfen tekrar deneyin.', true);
      }
    } finally {
      setLoginLoading(false);
    }
  };

  const logout = () => {
    setLoggedIn(false);
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('token');
    localStorage.removeItem('google-token');
    localStorage.removeItem('tokenExpiration');
  };

  return (
    <AuthContext.Provider value={{ loggedIn, loading, loginLoading, login, register, logout, openNotification }}>
      {children}
    </AuthContext.Provider>
  );
};
