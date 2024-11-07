import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // for redirection
import Cookies from 'js-cookie'; // to retrieve email and store OTP in cookies
import { AccountApi } from '../../../api/account.api';
import { notification } from 'antd'; // Ant Design notification

function Otp() {
    const inputRefs = useRef({});
    const [otpCode, setOtpCode] = useState('');
    const navigate = useNavigate();

    const handleChange = (e, index) => {
        const value = e.target.value;
        let otp = otpCode;

        if (value.length === 1 && !isNaN(value)) {
            otp = otp.substring(0, index) + value + otp.substring(index + 1);
            setOtpCode(otp);

            // Focus on the next input if possible
            if (index < 5) {
                inputRefs.current[index + 1].focus();
            }
        } else {
            if (value.length === 0 && index > 0) {
                otp = otp.substring(0, index - 1) + otp.substring(index);
                setOtpCode(otp);
                inputRefs.current[index - 1].focus();
            }
            e.target.value = '';
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = Cookies.get('email'); // Get email from cookies
    
        if (email && otpCode.length === 6) {
            try {
                // API çağrısı ile OTP doğrulaması
                const response = await AccountApi.verifyOtp({
                    email,
                    otpCode
                });
    
                console.log('API Response:', response); // API yanıtını kontrol et
    
                // Yanıtın doğru olup olmadığını kontrol et
                if (response && response.data && response.data.message === 'OTP is valid') {
                    // OTP kodu geçerliyse, kullanıcıyı yönlendir
                    notification.error({
                        message: 'Xəta !',
                        description: 'Daxil etdiyiniz OTP etibarsızdır. Yenidən cəhd edin.',
                    });
                } else {
                    navigate('/ResetPassword');
                    notification.success({
                        message: 'Uğurlu !',
                        description: 'OTP etibarlıdır. Növbəti səhifəyə keçid edilir...',
                    });
                }
            } catch (error) {
                // 400 hatası durumunda kullanıcıya yeniden OTP girmesini söyleyin
                if (error.response && error.response.status === 'Invalid OTP code') {
                    notification.error({
                        message: 'Xəta !',
                        description: 'Daxil etdiyiniz OTP etibarsızdır. Yenidən cəhd edin.',
                    });
                    setOtpCode('');
                    inputRefs.current[0].focus();
                } else {
                    notification.error({
                        message: 'Error',
                        description: 'An error occurred. Please try again.',
                    });
                }
            }
        } else {
            notification.warning({
                message: 'Invalid Input',
                description: 'Please enter a valid OTP.',
            });
        }

        // OTP kodunu cookies'de sakla
        Cookies.set('otpCode', otpCode);
    };
    
    return (
        <div>
            <div className="forgot">
                <div className="forgot-in">
                    <div className="forgot-box2">
                        <h2 className='w-100'>OTP</h2>
                        <form onSubmit={handleSubmit}>
                            <div className='d-flex ms-4 mt-4'>
                                <input
                                    className='otp3'
                                    type="text"
                                    maxLength={1}
                                    ref={(el) => inputRefs.current[0] = el}
                                    onInput={(e) => handleChange(e, 0)}
                                />
                                <input
                                    className='otp3'
                                    type="text"
                                    maxLength={1}
                                    ref={(el) => inputRefs.current[1] = el}
                                    onInput={(e) => handleChange(e, 1)}
                                />
                                <input
                                    className='otp3'
                                    type="text"
                                    maxLength={1}
                                    ref={(el) => inputRefs.current[2] = el}
                                    onInput={(e) => handleChange(e, 2)}
                                />
                                <input
                                    className='otp3'
                                    type="text"
                                    maxLength={1}
                                    ref={(el) => inputRefs.current[3] = el}
                                    onInput={(e) => handleChange(e, 3)}
                                />
                                <input
                                    className='otp3'
                                    type="text"
                                    maxLength={1}
                                    ref={(el) => inputRefs.current[4] = el}
                                    onInput={(e) => handleChange(e, 4)}
                                />
                                <input
                                    className='otp3 me-4'
                                    type="text"
                                    maxLength={1}
                                    ref={(el) => inputRefs.current[5] = el}
                                    onInput={(e) => handleChange(e, 5)}
                                />
                            </div>
                            <button type='submit' className='forgot-btn2'>
                                Gonder
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Otp;
