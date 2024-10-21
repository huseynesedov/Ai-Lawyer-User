import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../AuthContext';
import images from '../../../Assets/Images/js/images';
import { notification } from 'antd';

function Register() {
  const { register, googleLogin } = useAuth();
  const navigate = useNavigate();

  const [fullName, setFullName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  const validatePassword = (password) => {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*()\-_=+\{\}\[\]:;"'<>,.?\/\\`~]/.test(password);
    return hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar;
  };

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
        description: 'Şifrə ən az bir böyük hərf, bir kiçik hərf, bir rəqəm və bir xüsusi simvol içerməlidir.',
      });
      return;
    }

    register(fullName, lastName, email, userName, password, rePassword)
      .then(() => {
        navigate('/Login');
      })
      .catch((error) => {
        console.error("Kayıt başarısız: ", error);
      });
  };

  const handleGoogleLogin = async () => {
    try {
      await googleLogin();
      navigate('/');
    } catch (error) {
      console.error("Google girişi başarısız: ", error);
      notification.error({
        message: 'Xəta',
        description: 'Google girişi zamanı xəta baş verdi!',
      });
    }
  };

  return (
    <div className='login'>
      <div className="login-in">
        <div className="login-box">
          <h2>Hesaba Yaradın</h2>

          <form onSubmit={handleRegister}>
            <label>
              <p className='fs-12'>Adınız</p>
              <input
                type="text"
                value={fullName}
                onChange={(e) => {
                  const nameValue = e.target.value;
                  setFullName(nameValue);
                  setLastName(nameValue);
                }}
                placeholder="Adınızı yazın"
              />
            </label>

            <label>
              <p className='fs-12'>Email</p>
              <input
                type="text"
                value={userName}
                onChange={(e) => {
                  const usernameValue = e.target.value;
                  setUserName(usernameValue);
                  const emailValue = usernameValue.split('@')[0]; // username'den email'e dönüştürme mantığını değiştiriyoruz
                  setEmail(emailValue);
                }}
                placeholder='Kullanıcı adınız'
              />
            </label>

            <label>
              <p className='fs-12'>Şifrə</p>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='***********'
              />
            </label>

            <label>
              <p className='fs-12'>Şifrənizi yeniden yazın</p>
              <input
                type="password"
                value={rePassword}
                onChange={(e) => setRePassword(e.target.value)}
                placeholder='***********'
              />
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
            <p>Artıq hesabınız var?</p>
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
