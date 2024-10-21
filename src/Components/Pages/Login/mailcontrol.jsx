import React, { useState } from 'react';
import images from '../../../Assets/Images/js/images';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Spin } from 'antd';

function Mail() {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate(); // useNavigate hooku ilə yönləndirmə

    const handleClick = () => {
        setLoading(true); // Spin başlasın
        setTimeout(() => {
            setLoading(false); // Spin dayansın
            navigate('/Login'); // 1 saniyədən sonra yönləndirmə
        }, 1000); // 1 saniyəlik gecikmə
    };

    return (
        <>
            <div className='login'>
                <div className="login-in">
                    <div className="login-box d-flex align-items-center justify-content-center flex-column">
                        {/* Spin komponentini tum ekran gostermek */}
                        {loading && (
                            <div className="loading-overlay">
                                <Spin size="large" />
                            </div>
                        )}

                        <img src={images.mail} alt="" />
                        <span className='fs-16 fw-700 mt-3'>
                            E-poçt ünvanınızı yoxlayın
                        </span>
                        <span className='fs-16 fw-700 mt-5 w-70' style={{ width: "58%", textAlign: "center" }}>
                            E-mail ünvanınıza göndərilən Confirim Email klik ederek hesabinizi aktiv edin.
                        </span>

                        <Button className='mt-5' onClick={handleClick}>
                            Daxil ol
                        </Button>
                    </div>
                </div>
            </div>

            {/* Spin üçün overlay */}
            <style jsx>{`
                .loading-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(255, 255, 255, 0.8);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 9999;
                }
            `}</style>
        </>
    );
}

export default Mail;
