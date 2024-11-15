import React from 'react';
import images from '../../../Assets/Images/js/images';
import { Link, useNavigate } from 'react-router-dom';

function Bloq({ setSelectedBloq }) {
    const navigate = useNavigate();

    const bloqData = [
        { id: 1, title: "Tövsiyyə məktubu haqqında", description: "Tövsiyyə məktubu haqqında bilməli olduğunuz hərşey", img: images.bloqcard1 },
        { id: 2, title: "Hüquqşünasın səyahəti", description: "Hüquqşünasın səyahəti: Müasir Hüquq Peşəsində İnkişaf", img: images.bloqcard2 },
        { id: 3, title: "Hüquqda AI", description: "Hüquqda AI: AI hüquqşünası hüquqi xidmətlərə yanaşmanı necə dəyişdirir", img: images.bloqcard3 },
        { id: 4, title: "AI hüquqşünası ilə Məşğulluq", description: "AI hüquqşünası ilə Məşğulluq Mübahisələrinin Həlli İşlərinin həlli", img: images.bloqcard4 },
        { id: 5, title: "Ailə Hüququ Vəkili", description: "Ailə Hüququ Vəkili: Sənədlərin İdarə Edilməsi", img: images.bloqcard5 },
        { id: 6, title: "Mənə yaxın olan ən yaxşı", description: "Mənə yaxın olan ən yaxşı avtomobil qəzası hüquqşünasını necə tapmaq olar", img: images.bloqcard6 }
    ];

    const handleBloqClick = (bloq) => {
        setSelectedBloq(bloq);
        navigate("/bloq-details", { state: { bloq } }); // Burada state vasitəsilə məlumatı göndəririk
    };

    return (
        <div className="Bloq">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <h1 className="d-flex justify-content-center bloq-header">Bloq</h1>
                    </div>
                </div>
                <div className="row justify-content-center">
                    {bloqData.map((item, index) => (
                        <div className="col-xl-4" key={index}>
                            <div className="bloq-box">
                                <img src={item.img} className="bloq-card-img" alt={item.title} />
                                <div className="bloq-box-content">
                                    <p>{item.title}</p>
                                </div>
                                <div className="bloq-box-info">
                                    <div className="bloq-box-info-time">
                                        <img src={images.clockicon} alt="clock" />
                                        <span>3 dəq</span>
                                    </div>
                                    <div
                                        className="bloq-box-info-details text-black"
                                        onClick={() => handleBloqClick(item)}
                                    >
                                        <span>Daha ətraflı</span>
                                        <img src={images.bloqcardicon} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Bloq;
