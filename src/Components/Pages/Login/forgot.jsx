import React, { useState } from 'react';
import { notification } from 'antd';
import axios from 'axios';

function Forgot() {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://hashimovtabriz.com.tr/api/Auth/resetPasswordSendOtp', {
        email, // Make sure this key matches what the server expects
      });

      notification.success({
        message: 'Success',
        description: 'An email has been sent to reset your password.',
      });
    } catch (error) {
      const emailErrors = error.response?.data?.errors?.email;
      const errorMessage = emailErrors
        ? emailErrors.join(', ') // Combine any email-related errors into a string
        : 'An error occurred while trying to send the email.';
      
      notification.error({
        message: 'Error',
        description: errorMessage,
      });
      
      // Log detailed error information
      console.error('Email Validation Errors:', emailErrors);
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
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
