import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../../AuthContext';
import images from '../../../Assets/Images/js/images';
import { notification } from 'antd';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [fullName, setFullName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  // Şifre doğrulama fonksiyonu
  const validatePassword = (password) => {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*()\-_=+\{\}\[\]:;"'<>,.?\/\\`~]/.test(password);
    return hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar;
  };

  // Kayıt butonuna tıklandığında çalışacak fonksiyon
  const handleRegister = (e) => {
    e.preventDefault();

    if (!fullName || !lastName || !userName || !email || !password || !rePassword) {
      notification.error({
        message: 'Xəta',
        description: 'Bütün sahələri doldurun!',
      });
      return;
    }

    if (password !== rePassword) {
      notification.error({
        message: 'Xəta',
        description: 'Şifrələr eyni deyil!',
      });
      return;
    }

    if (!validatePassword(password)) {
      notification.error({
        message: 'Xəta',
        description: 'Parol zəifdir. Parolun ən azı bir böyük hərf, bir kiçik hərf, bir rəqəm və bir xüsusi simvol daxil etməsi lazımdır',
      });
      return;
    }

    register(fullName, lastName, email, userName, password, rePassword)
      .then(() => {
        // returnUrl varsa oraya yönlendir, yoksa anasayfaya yönlendir
        const returnUrl = new URLSearchParams(location.search).get('returnUrl');
        navigate(returnUrl || '/');
      })
      .catch((error) => {
        console.error("Kayıt başarısız: ", error);
        notification.error({
          message: 'Xəta',
          description: 'Qeydiyyat zamanı xəta baş verdi!',
        });
      });
  };

  // Google Token işleme
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get('token');
    const returnUrl = params.get('returnUrl');

    if (token) {
      localStorage.setItem('google-token', token);
      const expirationTime = new Date().getTime() + 12 * 60 * 60 * 1000;
      localStorage.setItem('google-token_expiration', expirationTime);

      // returnUrl varsa ona git, yoksa anasayfaya git
      navigate(returnUrl || '/');
    }
  }, [navigate]);

  const handleGoogleLogin = () => {
    try {
      localStorage.removeItem('token');
      // returnUrl'i sakla ve Google login URL'ine yönlendir
      const returnUrl = new URLSearchParams(window.location.search).get('returnUrl') || '/';
      window.location.href = `https://url.ailawyer.az/api/Auth/google-login`;
    } catch (error) {
      console.error("Google giriş uğursuz: ", error);
      notification.error({
        message: 'Xəta',
        description: 'Google giriş zamanı xəta baş verdi!',
      });
    }
  };
  

  return (
    <div className='login mt-5'>
      <div className="login-in">
        <div className="login-box">
          <h2>Hesab Yaradın</h2>

          <form onSubmit={handleRegister}>
            <label>
              <p className='fs-12 bck'>Adınız</p>
              <input
                type="text"
                value={fullName}
                onChange={(e) => {
                  const nameValue = e.target.value;
                  setFullName(nameValue);
                  setLastName(nameValue);
                }}
              />
            </label>

            <label>
              <p className='fs-12 bck'>Email</p>
              <input
                type="text"
                value={userName}
                onChange={(e) => {
                  const usernameValue = e.target.value;
                  setUserName(usernameValue);
                  const emailValue = usernameValue.split('@')[0];
                  setEmail(emailValue);
                }}
              />
            </label>

            <label>
              <p className='fs-12 bck'>Şifrə</p>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder='***********'
                />
                <span className='eye' onClick={() => setShowPassword(!showPassword)} style={{ cursor: 'pointer', marginLeft: '8px' }}>
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </span>
            </label>

            <label>
              <p className='fs-12 bck'>Şifrənizi yeniden yazın</p>
                <input
                  type={showPassword2 ? 'text' : 'password'}
                  value={rePassword}
                  onChange={(e) => setRePassword(e.target.value)}
                  placeholder='***********'
                />
                <span className='eye' onClick={() => setShowPassword2(!showPassword2)} style={{ cursor: 'pointer', marginLeft: '8px' }}>
                  {showPassword2 ? <FaEye /> : <FaEyeSlash />}
                </span>
            </label>

            <button className='sign-in'>Hesab Yarat</button>
          </form>

          <div className='border-bottom-liner mt-4 d-flex align-items-center justify-content-center'>
            <p className='fs-12'>Və ya</p>
          </div>

          <button className='sign-in-google mt-4 d-flex align-items-center' onClick={handleGoogleLogin}>
            <img src={images.google} alt="" />
            <p className='ms-1'>Google Ilə daxil ol</p>
          </button>

          <span className='fs-12 d-flex justify-content-center loginn'>
            <p>Hesabınız var?</p>
            <Link to={"/Login"}>
              <span className='fw-700 ms-2'>Daxil Ol</span>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Register;
