import React, { useEffect, useState } from 'react';
import images from '../../../Assets/Images/js/images';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';

function Chat() {
    const [token, setToken] = useState('');
    const [message, setMessage] = useState('');
    const [title, setTitle] = useState('');
    const [userId, setUserId] = useState('');
    const [chatId] = useState(0); // chatId burada sabit değer olarak belirleniyor.

    useEffect(() => {

        const token1 = localStorage.getItem("token");
        const token2 = localStorage.getItem("google-token");

        const tokenToUse = token1 || token2;
        console.log("Kullanılacak token:", tokenToUse);

        if (tokenToUse) {
            try {
                const decoded = jwtDecode(tokenToUse);
                console.log("Çözümleme sonrası kullanıcı ID'si:", decoded.id);
                setUserId(decoded.id);
                setToken(tokenToUse);
            } catch (error) {
                console.error("Token çözümleme hatası:", error);
            }
        }
    }, []);

    const sendTitle = async () => {
        console.log("sendTitle çalışıyor...");
        console.log("Gönderilecek mesaj başlığı:", message);
        console.log("Kullanıcı ID'si:", userId);
        console.log("Token:", token);

        try {
            const response = await axios.post('https://hashimovtabriz.com.tr/api/Chat/send-message', {
                title: message,
                userId: userId,
                chatId: chatId,
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            console.log('Mesaj gönderildi:', response.data);
            setMessage('');
        } catch (error) {
            if (error.response) {
                console.error('Hata Kodu:', error.response.status);
                console.error('Hata Mesajı:', error.response.data); // Backend'den gelen hata mesajı
            } else {
                console.error('İstek hatası:', error.message);
            }
        }
    };


    return (
        <div className='Chat d-flex flex-column'>
            <div className="container">
                <div className="row d-flex justify-content-between align-items-center position-relative">
                    <div className="col-xl-1 bg-turkuaz rounded my-5" style={{ width: "403px", height: "1070px" }}>
                        <div className="leftbar h-100 d-flex flex-column justify-content-between bg-turkuaz">
                            <div>
                                <div className='d-flex justify-content-between homburger'>
                                    <span className='fw-400 fs-24 text-black'>E-legal</span>
                                    <img src={images.homburger} alt="" />
                                </div>
                                <div className="d-flex bg-turkuaz flex-column justify-content-between mt-5 bg-turkuaz">
                                    <button>
                                        <div className='Chat-button d-flex align-items-center justify-content-between'>
                                            Yeni chat
                                            <img src={images.plus} alt="" />
                                        </div>
                                    </button>
                                    <div className='mt-5'>
                                        <button>
                                            <div className='Chat-button d-flex align-items-center justify-content-between'>
                                                Keçmiş
                                                <img src={images.arrowdown} alt="" />
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="userHello d-flex align-items-center">
                                <span>Xoş Gəlmisiniz , <span className='fs-20'>{sendTitle?.userName}</span></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-1 d-flex flex-column my-5 justify-content-between" style={{ width: "890px" }}>
                        <div className="h-100 d-flex flex-column justify-content-end ">

                            <div className="d-flex justify-content-end">
                                <div className="boxRight mb-4 me-2">
                                    <span className='fs-20 fw-400' >Thank you ;)</span>
                                    <div className="blue-part"></div>
                                </div>
                            </div>


                            <div className="d-flex align-items-start position-relative">
                                <div className='d-flex justify-content-end botImg'>
                                    <img src={images.bot} alt="" />
                                </div>
                                <div className="boxLeft mb-4 me-2">
                                    <div className="blue-part2"></div>
                                    <span className='fs-20 fw-400' >
                                        istinctio quam, consequatur eos autem iusto commodi at!
                                    </span>
                                </div>
                            </div>


                        </div>
                        <div className="input d-flex justify-content-between">
                            <input
                                type="text"
                                className='input-chat'
                                placeholder='Yeni mesaj yaz...'
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                            <div className='' onClick={sendTitle} style={{ cursor: "pointer" }}>
                                <img src={images.send} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Chat;
