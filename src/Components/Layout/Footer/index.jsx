import React from 'react';
import { Link } from 'react-router-dom';
import images from '../../../Assets/Images/js/images';

import { FaInstagram } from "react-icons/fa";
function Footer() {


    return (
        <div className='Footer'>
            <div className='container'>
                <div className="row">
                    <div className="col-xl-3">
                        <div className="footer-info">
                            <Link href="/">
                                <div className='w-100'>
                                    <img className='w-100' src={images.Logo2} alt="" />
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-2">
                        <Link to={"/Faq"}>
                            <h5>FAQ</h5>
                        </Link>

                    </div>
                    <div className="col-xl-2">
                        <Link to={"/Kontakt"}>
                            <h5>Kontakt</h5>
                        </Link>
                        <div className='mt-4 mail'>
                            <a href="mailto:admin@AILAWYER.AZ">
                                admin@AILAWYER.AZ
                            </a>
                        </div>
                        <div className='mt-2 mail'>
                            <a href="mailto:info@AILAWYER.AZ">
                                info@AILAWYER.AZ
                            </a>
                        </div>

                    </div>
                    <div className="col-xl-2">
                        <Link to={""}>
                            <h5>Sosial media</h5>
                        </Link>
                        <div className="mt-3 insta">
                            <a href="https://www.instagram.com/ailawyer.az/">
                                <FaInstagram />
                            </a>
                        </div>
                    </div>
                    <div className="col-xl-2">
                        <div className="footer-chat d-flex flex-column gap-3">
                            <p>Subscribe us</p>
                            <input type="text" placeholder='Sizin mailiniz...' />
                            <button>Chata başla</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Footer-bottom">
                <div className="container">
                    <div className="row w-100 bg-white">
                        <div className="col d-flex align-items-center justify-content-center">
                            <div className='fw-300 fs-13 fc-32'>
                                Copyright © 2021 e-Legal. All rights reserved.
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
