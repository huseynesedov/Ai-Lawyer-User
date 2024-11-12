import React, { useState } from 'react';
import { Input, Button, Form, notification } from 'antd';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { AccountApi } from '../../../api/account.api';

// Password validation function
const validatePassword = (password) => {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*()\-_=+\{\}\[\]:;"'<>,.?\/\\`~]/.test(password);
    return hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar;
};

function ResetPassword() {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleResetPassword = async () => {
        const email = Cookies.get('email');
        const otpCode = Cookies.get('otpCode');
        const password = newPassword;
        const rePassword = confirmPassword;

        // Password and rePassword validation
        if (password !== rePassword) {
            notification.error({
                message: 'Xəta !',
                description: 'Parollar uyğun gəlmir!',
            });
            return;
        }

        if (!password || !rePassword) {
            notification.info({
                message: 'Xəta !',
                description: 'Tələb olunan sahələr çatışmır!',
            });
            return;
        }

        if (!validatePassword(password)) {
            notification.error({
                message: 'Xəta !',
                description: 'Parol zəifdir. Parolun ən azı bir böyük hərf, bir kiçik hərf, bir rəqəm və bir xüsusi simvol daxil etməsi lazımdır : ( Example123!)',
                duration: 10,
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
                notification.error({
                    message: 'Xəta',
                    description: 'Parol uğurla sıfırlana bilmedi!',
                });
            } else {
                notification.success({
                    message: 'Uğurlu',
                    description: 'Parol uğurla sıfırlandı!',
                });
                Cookies.remove('otpCode');
                navigate('/Login');
            }
        } catch (error) {
            notification.error({
                message: 'Xəta',
                description: 'Bir problem meydana gəldi, zəhmət olmasa yenidən cəhd edin!',
            });
        }
    };

    return (
        <div className='login2 mt-5'>
            <div className="login-in mt-5">
                <div className="login-box">
                    <h2>Şifrəni sıfırla</h2>
                    <Form
                        onFinish={handleResetPassword}
                        layout="vertical" // Set form layout to vertical
                        initialValues={{
                            newPassword: newPassword,
                            confirmPassword: confirmPassword,
                        }}
                    >
                        <Form.Item
                            name="newPassword"
                            label="Şifrə"
                            rules={[{ required: true, message: 'Zəhmət olmasa yeni parolunuzu daxil edin!' }]}
                        >
                            <Input.Password
                                placeholder='*******'
                                style={{ width: "380px", height: "45px" }}
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                autoComplete="current-password"
                            />
                        </Form.Item>

                        <Form.Item
                            name="confirmPassword"
                            label="Yenidən Şifrə"
                            rules={[{ required: true, message: 'Zəhmət olmasa yeni parolunuzu yeniden daxil edin!' }]}
                        >
                            <Input.Password
                                placeholder='*******'
                                style={{ width: "380px", height: "45px" }}
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                autoComplete="current-password"
                            />
                        </Form.Item>

                        <Button type="primary" htmlType="submit" className='sign-inn2'>
                            Şifrəni sıfırla
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default ResetPassword;
