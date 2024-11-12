import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'; 
import { AccountApi } from '../../../api/account.api';
import { notification } from 'antd'; 

function Otp() {
    const inputRefs = useRef({});
    const [otpCode, setOtpCode] = useState('');
    const navigate = useNavigate();

    const handleChange = (e, index) => {
        const value = e.target.value;
        let otp = otpCode;

        // If the value is a valid number and the length is 1
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

    const handlePaste = (e) => {
        e.preventDefault();

        const pastedValue = e.clipboardData.getData('Text').trim();

        if (pastedValue.length === 6 && /^\d{6}$/.test(pastedValue)) {
            setOtpCode(pastedValue);

            for (let i = 0; i < 6; i++) {
                inputRefs.current[i].value = pastedValue[i];
            }
        } else {
            notification.error({
                message: 'Xəta !',
                description: 'Daxil etdiyiniz OTP etibarsızdır.',
            });
            setOtpCode('');
            inputRefs.current[0].focus();
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = Cookies.get('email');
        
        if (email && otpCode.length === 6) {
            try {
                const response = await AccountApi.verifyOtp({
                    email,
                    otpCode
                });
    
                if (response && response.data && response.data.message === 'OTP is valid') {
                    notification.error({
                        message: 'Xəta !',
                        description: 'Daxil etdiyiniz OTP etibarsızdır. Yenidən cəhd edin.',
                    });
                } else {
                    Cookies.set('otpCode', otpCode);
                    navigate('/ResetPassword');
                    notification.success({
                        message: 'Uğurlu !',
                        description: 'OTP etibarlıdır. Növbəti səhifəyə keçid edilir...',
                    });
                }
            } catch (error) {
                if (error.response && error.response.status === 'Invalid OTP code') {
                    notification.error({
                        message: 'Xəta !',
                        description: 'Daxil etdiyiniz OTPsss etibarsızdır. Yenidən cəhd edin.',
                    });
                    setOtpCode('');
                    inputRefs.current[0].focus();
                } else {
                    notification.error({
                        message: 'Xəta',
                        description: 'Daxil etdiyiniz OTP etibarsızdır. Yenidən cəhd edin.',
                    });
                    setOtpCode('');
                    inputRefs.current[0].focus();
                }
            }
        } else {
            // Show the warning notification
            notification.warning({
                message: '',
                description: 'Zehmet olmasa otp kodu yeniden gonderin,',
            });
        
            setTimeout(() => {
                navigate('/ForgotPassword');
                Cookies.remove('email');
                notification.success({
                    message: '',
                    description: 'Seyfeye kecid edildi!',
                });
            }, 2000);  
        }
    };

    return (
        <div>
            <div className="forgot">
                <div className="forgot-in">
                    <div className="forgot-box2">
                        <h2 className='w-100'>OTP</h2>
                        <form onSubmit={handleSubmit}>
                            <div className='d-flex mt-5'>
                                <input
                                    className='otp3'
                                    type="text"
                                    maxLength={1}
                                    ref={(el) => inputRefs.current[0] = el}
                                    onInput={(e) => handleChange(e, 0)}
                                    onPaste={handlePaste}  // Attach the paste handler
                                />
                                <input
                                    className='otp3'
                                    type="text"
                                    maxLength={1}
                                    ref={(el) => inputRefs.current[1] = el}
                                    onInput={(e) => handleChange(e, 1)}
                                    onPaste={handlePaste}  // Attach the paste handler
                                />
                                <input
                                    className='otp3'
                                    type="text"
                                    maxLength={1}
                                    ref={(el) => inputRefs.current[2] = el}
                                    onInput={(e) => handleChange(e, 2)}
                                    onPaste={handlePaste}  // Attach the paste handler
                                />
                                <input
                                    className='otp3'
                                    type="text"
                                    maxLength={1}
                                    ref={(el) => inputRefs.current[3] = el}
                                    onInput={(e) => handleChange(e, 3)}
                                    onPaste={handlePaste}  // Attach the paste handler
                                />
                                <input
                                    className='otp3'
                                    type="text"
                                    maxLength={1}
                                    ref={(el) => inputRefs.current[4] = el}
                                    onInput={(e) => handleChange(e, 4)}
                                    onPaste={handlePaste}  // Attach the paste handler
                                />
                                <input
                                    className='otp3 me-4'
                                    type="text"
                                    maxLength={1}
                                    ref={(el) => inputRefs.current[5] = el}
                                    onInput={(e) => handleChange(e, 5)}
                                    onPaste={handlePaste}  // Attach the paste handler
                                />
                            </div>
                            <button type='submit' className='forgot-btn2'>
                                Göndər
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Otp;
