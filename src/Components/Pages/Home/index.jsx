import React from 'react';
import images from '../../../Assets/Images/js/images';
import { Link } from 'react-router-dom';




function Home() {
    return (
        <div className='Home'>
            <div className="container">
                <div className="home-hero d-flex justify-content-center liner-gradient">
                    <div className="row align-items-center position-relative">
                        <div className="col-xl-6">
                            <div className="home-hero-content d-flex flex-column align-items-end gap-4">
                                <div>
                                    <h3>Aİ virtual hüqüqşünas sizin virtual hüquq məsləhətçinizdir.</h3>
                                    <p className='mt-4'>Bahalı hüquq məsləhətləri, görüşlər üçün uzun müddət gözləmələr və çaşqın hüquqi mətnlərlə vidalaşın.</p>
                                </div>
                                <div className='ai-start'>
                                    <Link to={"/Chat"}>
                                        <button>
                                            Çata başla
                                            <img className='ms-1' src={images.arrowright} alt="" />
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="home-hero-img">
                                <img src={images.Mockup} alt="" />
                            </div>
                        </div>
                        <div>
                        </div>
                        <div className='position-relative'>
                            <img className='position-absolute bezek1' src={images.bezek_2} alt="" />
                            <img className='position-absolute bezek2' src={images.bezek_1} alt="" />
                        </div>
                    </div>
                </div>
                <div className='home-info mt-5'>
                    <div className="row justify-content-between">
                        <div className="col">
                            <div className="home-info-content text-blue">
                                <h2 className='fw-700'>AI hüquqşünas necə işləyir?</h2>
                            </div>
                        </div>
                        <div className='col-xl-4'>
                            <div className="home-info-box me-4">
                                <div className="home-info-box-in">
                                    <img src={images.homecard1} />
                                    <div className="home-info-box-content d-flex flex-column ">
                                        <p className='text-blue fw-600'>İnternetlə işləyir</p>
                                        <p>Sürətli veb araşdırması, saatlarla təhlili saniyələr ərzində tamamlayır.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-start">
                        <div className='col-xl-4'>
                            <div className="home-info-box">
                                <div className="home-info-box-in">
                                    <img src={images.homecard2} />
                                    <div className="home-info-box-content d-flex flex-column">
                                        <p className='text-blue fw-600'>Çox platformalı</p>
                                        <p>Platformamıza sadə bir toxunuşla daxil olun – internetdə, iOS və ya Android-də.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-end">
                        <div className='col-xl-4'>
                            <div className="home-info-box">
                                <div className="home-info-box-in">
                                    <img src={images.homecard3} />
                                    <div className="home-info-box-content d-flex flex-column">
                                        <p className='text-blue fw-600'>Sizin üçün fərdiləşdirilmişdir</p>
                                        <p>Unikal seçimlərinizə uyğunlaşdırmaq üçün onu fərdiləşdirin və öyrədin.</p>
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
