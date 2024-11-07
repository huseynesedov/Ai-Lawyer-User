import React, { useState } from 'react';
import { useNavigate  } from 'react-router-dom'; // React Router için yönlendirme
import Cookies from 'js-cookie'; // js-cookie kütüphanesini import edin
import { notification } from 'antd';
import { AccountApi } from '../../../api/account.api';

function Forgot() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // useNavigate kullanarak yönlendirme yapıyoruz

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Email'i cookie'ye kaydet
    Cookies.set('email', email);

    try {
      const response = await AccountApi.resetPasswordSendOtp(email);
      notification.success({
        message: 'Başarıyla Gönderildi',
        description: 'E-posta şifrə sıfırlama kodu gönderildi. 3 Sanie sonra OTP seyfesine yonlendireleceksiz!',
      });

      // 5 saniye sonra başka bir sayfaya yönlendirme
      setTimeout(() => {
        navigate('/Otp'); // Yönlendireceğiniz sayfanın yolu
      }, 3000); // 3 saniye bekle

    } catch (error) {
      notification.error({
        message: 'Bir hata oluştu',
        description: 'Şifre sıfırlama isteği gönderilemedi. Lütfen tekrar deneyin.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className='forgot'>
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
              <button type='submit' className='forgot-btn' disabled={loading}>
                {loading ? 'Gönderiliyor...' : 'Gönder'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forgot;
