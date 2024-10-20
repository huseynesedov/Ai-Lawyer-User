import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../../AuthContext';

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const { userName: initialUserName, } = location.state || {};
  
  const [userName, setUserName] = useState(initialUserName || '');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    login(userName, password)
      .then(() => {
        navigate('/'); 
      })
      .catch((error) => {
        console.error("Giriş xətası: ", error); 
      });
  };

  return (
    <div className='login'>
      <div className="login-in">
        <div className="login-box">
          <h2>Hesaba giriş</h2>
          <form onSubmit={handleLogin}>
            <label>
              <p>Mailiniz və ya Adınız</p>
              <input 
                type="text" 
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </label>

            <label>
              <p>Şifrə</p>
              <input 
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder='*******'
                autoComplete="current-password"
              />
            </label>
            <button type="submit" className='sign-inn'>
              Daxil ol
            </button>
          </form>
        </div>
        <Link to={"/ForgotPassword"}>
          <p className="login-footer fs-16">Şifrəni unutmusunuz?</p>
        </Link>
      </div>
    </div>
  );
}

export default Login;
