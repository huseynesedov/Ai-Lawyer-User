import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../../AuthContext';
import Cookies from 'js-cookie';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { notification } from 'antd'; 

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);

  const { userName: initialUserName } = location.state || {};

  const [userName, setUserName] = useState(initialUserName || '');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const getCookie = (name) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(';').shift();
      return null;
    };

    const emailFromCookie = getCookie('email');
    if (emailFromCookie && !initialUserName) {
      setUserName(emailFromCookie);
    }
  }, [initialUserName]);

  const handleLogin = (e) => {
    e.preventDefault();
  
    if (!userName || !password) {
      notification.error({
        message: 'Xəta !',
        description: 'Zəhmət Olmasa bütün xanaları doldurun !',
        placement: 'topRight',
      });
      return;
    }
  
    localStorage.removeItem('google-token');
    localStorage.removeItem('google-token_expiration');
  
    login(userName, password)
      .then(() => {
        Cookies.remove('email');
      })
      .catch((error) => {
        console.error("Giriş xətası: ", error);
        notification.error({
          message: 'Giriş Hatası',
          description: 'Giriş xətası, lütfen tekrar deneyin.',
          placement: 'topRight',
        });
      });
  };
  

  return (
    <div className='login mt-5'>
      <div className="login-in mt-5">
        <div className="login-box">
          <h2>Hesaba giriş</h2>
          <form onSubmit={handleLogin}>
            <label>
              <p>Mailiniz və ya Adınız</p>
              <input
                type="text"
                name='email'
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </label>

            <label>
              <p>Şifrə</p>
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='*******'
                autoComplete="current-password"
              />
              <span className='eye' onClick={() => setShowPassword(!showPassword)} style={{ cursor: 'pointer', marginLeft: '8px' }}>
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </span>
            </label>
            <div className="w-100 d-flex justify-content-end">
              <Link to={"/ForgotPassword"}>
                <p className="login-footer fs-16">Şifrəni unutmusuz?</p>
              </Link>
            </div>
            <button type="submit" className='sign-inn'>
              Daxil ol
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
