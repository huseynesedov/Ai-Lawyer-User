import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import images from '../../../Assets/Images/js/images';

const BloqDetails = () => {
    const location = useLocation();
    const { bloq } = location.state || {}; // State-dən bloq məlumatını alırıq

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
                          <h4><li>{bloq.description}</li></h4>
                          <li>{bloq.description} <br />Giriş <br />
                              {bloq.header}<br />Əsas Hissə
                              <ul>
                                  <li className="list-style-none">{bloq.mainheader}<br />
                                      {bloq.mainheadermain}<li>
                                          {bloq.mainmainheader}<br />
                                          {bloq.mainmain}
                                          <ul className="Bloq-Details-main-in">
                                              <li>
                                                  {bloq.mainmainmainheader}
                                              </li>
                                              <li>
                                                  {bloq.mainmainmain}
                                              </li>
                                              <li>{bloq.mainmainmainfooter}</li>
                                          </ul>
                                          <li className="list-style-none">
                                              {bloq.footerheader} <br />{bloq.footermain}
                                          </li>
                                      </li>
                                  </li>
                              </ul>
                              {bloq.footerfooterheader} <br />
                              {bloq.footerfootermain}
                          </li>
                      </ol>
                  </div>
                  <div className="Bloq-Details-footer">
                      <div className="row justify-content-center">
                      <div className="col-xl-4">
              <div className="bloq-box">
                  <img src={images.bloqcard4} className='bloq-card-img'/>
                  <div className="bloq-box-content">
                      <p>Tövsiyyə məktubu haqqında bilməli olduğunuz hərşey</p>
                  </div>
                  <div className="bloq-box-info">
                   <div className="bloq-box-info-time">
                   <img src={images.clockicon}/>
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
                  <img src={images.bloqcard5} className='bloq-card-img'/>
                  <div className="bloq-box-content">
                      <p>Ailə Hüququ Vəkili: Sənədlərin İdarə Edilməsi</p>
                  </div>
                  <div className="bloq-box-info">
                   <div className="bloq-box-info-time">
                   <img src={images.clockicon}/>
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
                  <img src={images.bloqcard6} className='bloq-card-img'/>
                  <div className="bloq-box-content">
                      <p>Mənə yaxın olan ən yaxşı avtomobil qəzası hüquqşünasını necə tapmaq olar</p>
                  </div>
                  <div className="bloq-box-info">
                   <div className="bloq-box-info-time">
                   <img src={images.clockicon}/>
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