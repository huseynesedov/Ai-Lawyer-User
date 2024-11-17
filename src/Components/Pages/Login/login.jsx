import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../../AuthContext';
import Cookies from 'js-cookie';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { notification } from 'antd';
import images from '../../../Assets/Images/js/images'; // Google giriş görseli

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);

  const { userName: initialUserName } = location.state || {};
  const [userName, setUserName] = useState(initialUserName || '');
  const [password, setPassword] = useState('');

  // URL'deki returnUrl parametresini almak için
  const [returnUrl, setReturnUrl] = useState('/');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const returnUrlParam = params.get('returnUrl');
    if (returnUrlParam) {
      setReturnUrl(returnUrlParam);
    }

    const emailFromCookie = Cookies.get('email');
    if (emailFromCookie && !initialUserName) {
      setUserName(emailFromCookie);
    }
  }, [initialUserName, location.search]);

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

  const handleGoogleLogin = () => {
    try {
      localStorage.removeItem('token');
      const returnUrl = new URLSearchParams(window.location.search).get('returnUrl') || '/';
      window.location.href = `https://url.ailawyer.az/api/Auth/google-login`;
      notification.success({
        message: 'Uğurlu',
        description: 'Google girişi uğurlu !',
      });
    } catch (error) {
      notification.error({
        message: 'Xəta',
        description: 'Google giriş zamanı xəta baş verdi!',
      });
    }
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

          <div className='border-bottom-liner mt-4 d-flex align-items-center justify-content-center'>
            <p className='fs-12'>Və ya</p>
          </div>

          <button className='sign-in-google mt-4 d-flex align-items-center' onClick={handleGoogleLogin}>
            <img src={images.google} alt="Google Giriş" />
            <p className='ms-1'>Google ilə daxil ol</p>
          </button>

          <span className='fs-12 d-flex justify-content-center loginn mt-3'>
            <p>Hesabınız yoxdur?</p>
            <Link to={"/Register"}>
              <span className='fw-700 ms-2'>Qeydiyyat</span>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;
