import React from 'react';
import { Link } from 'react-router-dom';


function Footer() {


    return (
        <div className='Footer'>
            <div className='container'>
                <div className="row">
                    <div className="col-xl-3">
                        <div className="footer-info">
                            <Link href="/">
                            <p className='fs-28 fw-400'>
                                E-Legal
                            </p>
                            </Link>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                    </div>
                    <div className="col-xl-2">
                            <Link to={""}>
                                <h5>FAQ</h5>
                            </Link>
                    </div>
                    <div className="col-xl-2">
                        <Link to={""}>
                                <h5>Kontakt</h5>
                            </Link>
                    </div>
                    <div className="col-xl-2">
                        <Link to={""}>
                                <h5>Sosial media</h5>
                            </Link>
                    </div>
                    <div className="col-xl-2">
                        <div className="footer-chat d-flex flex-column gap-3">
                            <p>Subscribe us</p>
                            <input type="text" placeholder='Sizin mailiniz...'/>
                            <button>Chata başla</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
