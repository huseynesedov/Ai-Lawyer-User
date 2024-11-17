import React, { useState } from 'react';
import { notification } from 'antd';
import images from '../../../Assets/Images/js/images';
import { AccountApi } from '../../../api/account.api';

function Kontakt() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const openNotification = (type, message) => {
        notification[type]({
            message: message,
            placement: 'topRight',
            duration: 3
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const isFormComplete = Object.values(formData).every(field => field.trim() !== "");
        if (!isFormComplete) {
            openNotification('error', 'Zəhmət olmasa bütün sahələri doldurun.');
            return;
        }

        const dataToSend = {
            fullName: formData.fullName,
            email: formData.email,
            phoneNumber: formData.phoneNumber,
            subject: formData.subject,
            message: formData.message
        };

        try {
            const response = await AccountApi.submitForm(dataToSend);

            openNotification('Uğurlu !', 'Mesajınız uğurla göndərildi.');

            setFormData({
                fullName: '',
                email: '',
                phoneNumber: '',
                subject: '',
                message: ''
            });
        } catch (error) {

            openNotification('Xəta !', 'Mesaj göndəriləmədi. Xaiş olunur təkrar yoxlayın.');
        }
    };

    return (
        <div className='Kontakt'>
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-xl-4" data-aos="fade-right">
                        <h2 className='kontakt-header' >Bizimlə əlaqə</h2>
                    </div>
                    <div className="col-xl-6" data-aos="fade-left">
                        <img src={images.kontaktimg} alt="" className='kontakt-img' />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-5">
                        <h2 className='kontakt-main'>Mesaj Göndər</h2>
                    </div>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="row gap-5">
                        <div className="row justify-content-center">
                            <div className="col-xl-3" data-aos="fade-right">
                                <input
                                    type="text"
                                    placeholder="Ad, soyad"
                                    className='input2'
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-xl-3" data-aos="fade-left">
                                <input
                                    type="text"
                                    placeholder="Subject"
                                    className='input2'
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-xl-3" data-aos="fade-right">
                                <input
                                    type="text"
                                    placeholder="G-mail"
                                    className='input2'
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-xl-3" data-aos="fade-left">
                                <input
                                    type="text"
                                    placeholder="Number"
                                    className='input2'
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-xl-6" data-aos="zoom-in-up">
                                <input
                                    type="text"
                                    className='message-input'
                                    placeholder='Mesaj yaz'
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="row justify-content-end" >
                            <div className="col-xl-6">
                                <button data-aos="zoom-out-down" type="submit" className='message-send-btn ms-3'>Göndər</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Kontakt;
