import React from 'react'
import images from '../../../Assets/Images/js/images'

function Bloq() {
    return (
        <div className='Bloq'>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <h1 className='d-flex justify-content-center bloq-header'>Bloq</h1>
                    </div>
                </div>
                <div className="row mt-5 justify-content-center">
                    <div className="col-xl-4">
                        <div className="bloq-box">
                            <img src={images.bloqcard1} className='bloq-card-img' />
                            <div className="bloq-box-content">
                                <p>Tövsiyyə məktubu haqqında bilməli olduğunuz hərşey</p>
                            </div>
                            <div className="bloq-box-info">
                                <div className="bloq-box-info-time">
                                    <img src={images.clockicon} />
                                    <span>3 dəq</span>
                                </div>
                                <div className="bloq-box-info-details">
                                    <span>Daha ətraflı</span>
                                    <img src={images.bloqcardicon} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4">
                        <div className="bloq-box">
                            <img src={images.bloqcard2} className='bloq-card-img' />
                            <div className="bloq-box-content">
                                <p>Hüquqşünasın səyahəti: Müasir Hüquq Peşəsində İnkişaf</p>
                            </div>
                            <div className="bloq-box-info">
                                <div className="bloq-box-info-time">
                                    <img src={images.clockicon} />
                                    <span>3 dəq</span>
                                </div>
                                <div className="bloq-box-info-details">
                                    <span>Daha ətraflı</span>
                                    <img src={images.bloqcardicon} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4">
                        <div className="bloq-box">
                            <img src={images.bloqcard3} className='bloq-card-img' />
                            <div className="bloq-box-content">
                                <p>Hüquqda AI: AI hüquqşünası hüquqi xidmətlərə yanaşmanı necə dəyişdirir</p>
                            </div>
                            <div className="bloq-box-info">
                                <div className="bloq-box-info-time">
                                    <img src={images.clockicon} />
                                    <span>3 dəq</span>
                                </div>
                                <div className="bloq-box-info-details">
                                    <span>Daha ətraflı</span>
                                    <img src={images.bloqcardicon} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4">
                        <div className="bloq-box">
                            <img src={images.bloqcard4} className='bloq-card-img' />
                            <div className="bloq-box-content">
                                <p>AI hüquqşünası ilə Məşğulluq Mübahisələrinin Həlli İşlərinin həlli</p>
                            </div>
                            <div className="bloq-box-info">
                                <div className="bloq-box-info-time">
                                    <img src={images.clockicon} />
                                    <span>3 dəq</span>
                                </div>
                                <div className="bloq-box-info-details">
                                    <span>Daha ətraflı</span>
                                    <img src={images.bloqcardicon} alt="" />
                                </div>
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
                                <div className="bloq-box-info-details">
                                    <span>Daha ətraflı</span>
                                    <img src={images.bloqcardicon} alt="" />
                                </div>
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
                                <div className="bloq-box-info-details">
                                    <span>Daha ətraflı</span>
                                    <img src={images.bloqcardicon} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bloq
