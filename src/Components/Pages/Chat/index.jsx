import React, { useEffect, useState } from 'react';
import images from '../../../Assets/Images/js/images';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios'; // Axios kütüphanesini import et

function Chat() {
    const [decodedToken, setDecodedToken] = useState(null);
    const [idHash, setIdHash] = useState(null);
    const [data, setData] = useState(null);
    const [title, setTitle] = useState(""); // Mesaj için state

    const UserData = async (userIdHash) => {
        try {
            const response = await axios.get(`https://hashimovtabriz.com.tr/api/Chat/user-data/${userIdHash}`);
            // Verileri işleme
        } catch (error) {
            if (error.response) {
                // Sunucu cevap verdi, ama bir hata kodu ile
                console.error("Kullanıcı verileri alınırken hata:", error.response.data);
                console.error("Hata Kodu:", error.response.status);
            } else if (error.request) {
                // İstek yapıldı ama cevap alınamadı
                console.error("İstek yapıldı ama cevap alınamadı:", error.request);
            } else {
                // Diğer hatalar
                console.error("Hata oluştu:", error.message);
            }
        }
    };


    useEffect(() => {
        const token1 = localStorage.getItem("token");
        const token2 = localStorage.getItem("google-token");

        const tokenToUse = token1 || token2;
        console.log("Kullanılacak token:", tokenToUse);

        if (tokenToUse) {
            const decoded = jwtDecode(tokenToUse);
            console.log("Decoding işlemi tamamlandı, decoded:", decoded);

            setDecodedToken(decoded);
            setIdHash(decoded?.id);

            // console.log("idHash:", decoded?.id);

            if (decoded?.id) {
                UserData(decoded.id);
            }
            // } else {
            //     console.error("UserIdHash bulunamadı.");
            // }
        } else {
            console.error("Geçerli bir token bulunamadı.");
        }
    }, []);

    const handleSendMessage = async () => {
        console.log("Mesaj gönderme işlemi başlatıldı.");
        if (!idHash || !title) {
            console.error("idHash veya title boş, işlem durduruldu.");
            return;
        }

        const token1 = localStorage.getItem("token");
        const token2 = localStorage.getItem("google-token");
        const tokenToUse = token1 || token2;

        if (!tokenToUse) {
            console.error("Geçerli bir token bulunamadı.");
            return;
        }

        try {
            console.log("Gönderilen Mesaj:", title);
            const response = await axios.post(
                'https://hashimovtabriz.com.tr/api/Chat/create-chat',
                {
                    idHash,
                    title,
                },
                {
                    headers: {
                        Authorization: `Bearer ${tokenToUse}`,
                        'Content-Type': 'application/json',
                    },
                }
            );
            console.log("Mesaj Gönderildi:", title);
            console.log("API'den Gelen Yanıt:", response.data);
            setTitle("");
        } catch (error) {
            console.error("Mesaj gönderirken hata:", error);
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
                                <span>Xoş Gəlmisiniz , <span className='fs-20'>{data?.UserName}</span></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-1 borderr h-100vhh" style={{ width: "890px" }}>
                        <div className="input d-flex">
                            <input
                                type="text"
                                className='borderr'
                                placeholder='Yeni mesaj yaz...'
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                            <button onClick={handleSendMessage} className='btn btn-primary ms-2'>Gönder</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Chat;
