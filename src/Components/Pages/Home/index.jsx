import React from 'react';
import images from '../../../Assets/Images/js/images';
import { useNavigate } from 'react-router-dom';
import { notification } from 'antd';

function Home() {
    const navigate = useNavigate();

    const handleChatStart = () => {
        const token = localStorage.getItem('token');
        const googleToken = localStorage.getItem('google-token');
        if (!token && !googleToken) {
            navigate('/login?returnUrl=/Chat');
            notification.info({
                description: 'Çata başlamaq üçün əvvəlcə giriş etməlisiniz.',
                placement: 'topRight',
            });
        } else {
            navigate('/Chat');
        }
    };

    return (
        <div className='Home'>
            <div className="container">
                <div className="home-hero d-flex justify-content-center liner-gradient">
                    <div className="row align-items-center position-relative mt-5">
                        <div className="col-xl-6 mt-5">
                            <div className="home-hero-content mt-5 d-flex flex-column align-items-end gap-4">
                                <div>
                                    <h3 data-aos="fade-right" style={{ fontSize: "32px" }}>Aİ virtual hüqüqşünas sizin virtual hüquq məsləhətçinizdir.</h3>
                                    <p data-aos="fade-right" className='mt-4' style={{ fontSize: "20px" }}>Bahalı hüquq məsləhətləri, görüşlər üçün uzun müddət gözləmələr və çaşqın hüquqi mətnlərlə vidalaşın.</p>
                                </div>
                                <div className='ai-start mt-4'>
                                    <button data-aos="zoom-in" onClick={handleChatStart}>
                                        Çata başla
                                        <img className='ms-1' src={images.arrowright} alt="" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 d-flex align-item-center justify-content-center">
                            <div className="home-hero-img position-relative">
                                <img data-aos="fade-left" src={images.Mockup} className='w-100 s' alt="" />
                            <img className='position-absolute bezek3' src={images.bezekMokup1} alt="" />
                            <img className='position-absolute bezek4' src={images.bezekMokup2} alt="" />
                            </div>
                        </div>
                        <div>
                        </div>
                        <div className='position-relative'>
                            <img className='position-absolute bezek1' data-aos="fade-up" src={images.bezek_2} alt="" />
                            <img className='position-absolute bezek2' data-aos="fade-down" src={images.bezek_1} alt="" />
                        </div>
                    </div>
                </div>
                <div className='home-info mt-5'>
                    <div className="row justify-content-between">
                        <div className="col">
                            <div className="home-info-content text-blue" data-aos="fade-right">
                                <h2 className='fw-700 fs-36'>AI hüquqşünas necə işləyir?</h2>
                            </div>
                        </div>
                        <div className='col-xl-4'>
                            <div className="home-info-box " data-aos="fade-left">
                                <div className="home-info-box-in">
                                    <img data-aos="zoom-in-up" src={images.homecard1} alt="" />
                                    <div className="home-info-box-content d-flex flex-column">
                                        <p className='text-blue fs-24 fw-600'>İnternetlə işləyir</p>
                                        <p className='fs-20 fw-400'>Sürətli veb araşdırması, saatlarla təhlili saniyələr ərzində tamamlayır.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-start">
                        <div className='col-xl-4' data-aos="fade-right">
                            <div className="home-info-box">
                                <div className="home-info-box-in">
                                    <img data-aos="zoom-in-up" src={images.homecard2} alt="" />
                                    <div className="home-info-box-content d-flex flex-column">
                                        <p className='text-blue fs-24 fw-600'>Çox platformalı</p>
                                        <p className='fs-20 fw-400'>Platformamıza sadə bir toxunuşla daxil olun – internetdə, iOS və ya Android-də.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-end">
                        <div className='col-xl-4' data-aos="fade-left">
                            <div className="home-info-box">
                                <div className="home-info-box-in">
                                    <img data-aos="zoom-in-up" src={images.homecard3} alt="" />
                                    <div className="home-info-box-content d-flex flex-column">
                                        <p className='text-blue fs-24 fw-600'>Sizin üçün fərdiləşdirilmişdir</p>
                                        <p className='fs-20 fw-400'>Unikal seçimlərinizə uyğunlaşdırmaq üçün onu fərdiləşdirin və öyrədin.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
