import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import images from '../../../Assets/Images/js/images';

const BloqDetails = () => {
    const location = useLocation();
    const { bloq } = location.state || {};

    if (!bloq) {
        return <p>Bloq məlumatı tapılmadı</p>;
    }

    return (
        <div className='BloqDetails'>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="Bloq-Details-hero">
                            <img
                                src={bloq.img}
                                alt="Background"
                                className="bloq-details-img"
                            />
                            <div className="bloq-details-content">
                                <div className="col-xl-6">
                                    <h2 className="bloq-details-text">{bloq.title}</h2>
                                </div>
                                <div className="col-xl-3">
                                    <div className="bloq-details-info">
                                        <span className="bloq-date">
                                            <img src={images.clockwhite} alt="" />
                                            12.12.2024
                                        </span>
                                        <span className="bloq-views">
                                            <img src={images.bloqdetails} alt="" />
                                            34.567
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="Bloq-Details-main">
                            <ol>
                                <h4><li>1. {bloq.description}</li></h4>
                                <li>1. {bloq.description} <br />Giriş <br />
                                    Tövsiyyə məktubu iş və ya təhsil imkanlarına müraciət edən şəxs haqqında fikir yaratmaq üçün mühüm rol oynayır. Ənənəvi olaraq, işəgötürənlər və təhsil müəssisələri müraciətçinin bacarıqları və xarakteri haqqında daha dərin məlumat almaq üçün tövsiyyə məktublarına etibar edirlər. Bu yazıda tövsiyyə məktubunun əhəmiyyəti, strukturu və ideal bir məktubun necə yazılacağı haqqında ətraflı danışacağıq.<br />Əsas Hissə
                                    <ul>
                                        <li>Tövsiyyə Məktubu Nədir və Niyə Vacibdir? <br />
                                            Tövsiyyə məktubu müraciətçinin keçmiş təcrübələrini və bacarıqlarını təsdiqləyən sənəddir. Müraciətçinin karyera və ya akademik yolunda bu məktubun böyük təsiri olur. Məsələn, bir hüquqşünas işə qəbul zamanı əvvəlki iş yoldaşlarından alınan müsbət tövsiyyə məktubunu təqdim edərək özünü təsdiqləyə bilər. <li>
                                                Yaxşı Tövsiyyə Məktubunun Strukturu <br />
                                                Güclü bir tövsiyyə məktubu giriş, əsas hissə və nəticədən ibarətdir:
                                                <ul>
                                                    <li>
                                                        Girişdə müraciətçini təqdim edərək necə tanıdığınızı və hansı sahədə birlikdə çalışdığınızı izah edin.
                                                    </li>
                                                    <li>
                                                        Əsas hissədə müraciətçinin əsas bacarıqları və uğurlarına dair nümunələr verin.
                                                    </li>
                                                    <li>Nəticədə müraciətçinin uyğun olduğunu təsdiq edin və onu səmimi şəkildə dəstəklədiyinizi qeyd edin.</li>
                                                </ul>
                                                <li>
                                                    Real Nümunə <br />Hüquq şirkətində bir hüquqşünasa yazılan tövsiyyə məktubu: “(Müraciətçi adı), layihə təhvilindəki dəqiqliyi və detallara diqqəti ilə fərqlənir. Onunla çalışmaq, onun hüquq bacarıqlarının inkişafına şahid olmaq həqiqətən ilhamvericidir.”
                                                </li>
                                            </li>
                                        </li>
                                    </ul>
                                    Nəticə <br />
                                    Güclü və yaxşı yazılmış tövsiyyə məktubu müraciətçinin uğur qazanmasına mühüm töhfə verir. Məktubun səmimiyyəti və dəstəyi <br /> mütləq şəkildə çatdırması zəruridir.
                                </li>
                            </ol>
                        </div>
                        <div className="Bloq-Details-footer">
                            <div className="row justify-content-center">
                                <div className="col-xl-4">
                                    <div className="bloq-box">
                                        <img src={images.bloqcard4} className='bloq-card-img' />
                                        <div className="bloq-box-content">
                                            <p>Tövsiyyə məktubu haqqında bilməli olduğunuz hərşey</p>
                                        </div>
                                        <div className="bloq-box-info">
                                            <div className="bloq-box-info-time">
                                                <img src={images.clockicon} />
                                                <span>3 dəq</span>
                                            </div>
                                            <Link to={"/Bloq-details"} className="bloq-box-info-details text-black">
                                                <span>Daha ətraflı</span>
                                                <img src={images.bloqcardicon} alt="" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4">
                                    <div className="bloq-box">
                                        <img src={images.bloqcard5} className='bloq-card-img' />
                                        <div className="bloq-box-content">
                                            <p>Ailə Hüququ Vəkili: Sənədlərin İdarə Edilməsi</p>
                                        </div>
                                        <div className="bloq-box-info">
                                            <div className="bloq-box-info-time">
                                                <img src={images.clockicon} />
                                                <span>3 dəq</span>
                                            </div>
                                            <Link to={"/Bloq-details"} className="bloq-box-info-details text-black">
                                                <span>Daha ətraflı</span>
                                                <img src={images.bloqcardicon} alt="" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4">
                                    <div className="bloq-box">
                                        <img src={images.bloqcard6} className='bloq-card-img' />
                                        <div className="bloq-box-content">
                                            <p>Mənə yaxın olan ən yaxşı avtomobil qəzası hüquqşünasını necə tapmaq olar</p>
                                        </div>
                                        <div className="bloq-box-info">
                                            <div className="bloq-box-info-time">
                                                <img src={images.clockicon} />
                                                <span>3 dəq</span>
                                            </div>
                                            <Link to={"/Bloq-details"} className="bloq-box-info-details text-black">
                                                <span>Daha ətraflı</span>
                                                <img src={images.bloqcardicon} alt="" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BloqDetails;