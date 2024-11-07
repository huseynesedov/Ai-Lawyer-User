import React, { useState } from 'react';
import { Input, Button, Form, notification } from 'antd';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'; 
import { AccountApi } from '../../../api/account.api';

function ResetPassword() {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const history = useNavigate();

    // Handle password reset
    const handleResetPassword = async () => {
        const email = Cookies.get('email');
        const otpCode = Cookies.get('otpCode');
        const password = newPassword; // map to the correct field
        const rePassword = confirmPassword; // map to the correct field
    
        // Ensure both password fields are identical
        if (password !== rePassword) {
            notification.error({
                message: 'Xəta !',
                description: 'Parollar uyğun gəlmir!',
            });
            return;
        }
    
        // Check if the required data is available
        if (!email || !otpCode || !password || !rePassword) {
            notification.error({
                message: 'Xəta !',
                description: 'Tələb olunan sahələr çatışmır!',
            });
            return;
        }
    
        try {
            const response = await AccountApi.resetPasswordWithOtp({
                email,
                otpCode,
                password,
                rePassword,
            });
        
            if (response.status === 200) {
                notification.success({
                    message: 'Uğurlu',
                    description: 'Parol uğurla sıfırlandı!',
                });
                history.push('/Login');
            }
        } catch (error) {
            console.error("Error response:", error.response);  // Log the full error response
            notification.error({
                message: 'Error',
                description: error.response?.data?.message || 'Failed to reset password. Please try again.',
            });
        }
        
    };
    

    return (
        <div className='login'>
            <div className="login-in">
                <div className="login-box">
                    <h2>Hesaba giriş</h2>
                    <Form onFinish={handleResetPassword}>
                        <Form.Item
                            name="newPassword"
                            rules={[{ required: true, message: 'Please input your new password!' }]}
                        >
                            <Input.Password
                                placeholder='*******'
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                autoComplete="current-password"
                            />
                        </Form.Item>

                        <Form.Item
                            name="confirmPassword"
                            rules={[{ required: true, message: 'Please confirm your new password!' }]}
                        >
                            <Input.Password
                                placeholder='*******'
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                autoComplete="current-password"
                            />
                        </Form.Item>

                        <Button type="primary" htmlType="submit" className='sign-inn'>
                            Daxil ol
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default ResetPassword;
