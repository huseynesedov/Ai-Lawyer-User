import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // React Router için yönlendirme
import Cookies from 'js-cookie'; // js-cookie kütüphanesini import edin
import { notification } from 'antd';
import { AccountApi } from '../../../api/account.api';

function Forgot() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); 

  const isValidGmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return regex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);



    if (!isValidGmail(email)) {
      notification.error({
        message: 'Xətalı E-posta',
        description: 'Xaiş olunur bir Gmail adresi yazın.',
      });
      setLoading(false);
      return;
    }

    Cookies.set('email', email);

    try {
      const response = await AccountApi.resetPasswordSendOtp(email);
      notification.success({
        message: 'Başarıyla Göndərildi',
        description: 'E-posta şifrə sıfırlama kodu göndərildi. 1 saniye sonra OTP səyfəsinə yönləndiriləcəksiniz!',
      });

      setTimeout(() => {
        navigate('/Otp');
      }, 1000); 

    } catch (error) {
      notification.error({
        message: 'Bir xəta oldu',
        description: 'Şifre sıfırlama göndəriləmədi. Xaiş olunur yenidən yoxlayın.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className='forgot mt-5'>
        <div className="forgot-in">
          <div className="forgot-box">
            <h2>Şifrəni bərpa et</h2>
            <form onSubmit={handleSubmit}>
              <label>
                <p>Email</p>
                <input
                  type="email"
                  name='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} // Input değeri güncelle
                  required
                />
              </label>
              <button type='submit' className='forgot-btn mt-2' disabled={loading}>
                {loading ? 'Göndərilir...' : 'Göndər'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forgot;
