import React, { useState } from 'react';
import { notification } from 'antd';
import { AccountApi } from '../../../api/account.api'; 

function Forgot() {
  const [email, setEmail] = useState('');

  const handleForgotPassword = async (e) => {
    e.preventDefault();

    if (!email) {
      notification.error({
        message: 'Xəta',
        description: 'E-posta adresini daxil edin!',
      });
      return;
    }

    try {
      await AccountApi.resetPasswordSendEmail(email); 

    } catch (error) {
      console.error("Şifrə sıfırlama e-postasını göndərilirkən xəta oldu: ", error);
      const errorMessage = error.response?.data?.errors?.email?.[0] || 'Bir xəta oldu.';
      notification.error({
        message: 'Xəta',
        description: errorMessage,
      });
    }
  };

  return (
    <div>
      <div className='forgot'>
        <div className="forgot-in">
          <div className="forgot-box">
            <h2>Şifrəni bərpa et</h2>
            <form onSubmit={handleForgotPassword}>
              <label>
                <p>Email</p>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <button type='submit' className='forgot-btn'>Göndər</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forgot;
