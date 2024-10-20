import React from 'react';
import { Link } from 'react-router-dom';


function Header() {


    return (
        <>
            <div className="Container">
                <div className="myNav d-flex align-items-center justify-content-between">
                    <div className="logo_SearchBar">
                        <Link to={"/"}>
                            <p className='fs-28 fw-400 color-black'>
                                E-Legal
                            </p>
                        </Link>
                    </div>

                    <div className='d-flex nav_menu'>
                        <ul>
                            <Link to={""}>
                                <li>Ana Səhifə</li>
                            </Link>
                            <Link to={""}>
                                <li>Faq</li>
                            </Link>
                            <Link to={""}>
                                <li>Bloq</li>
                            </Link>
                            <Link to={""}>
                                <li>Kontakt</li>
                            </Link>
                        </ul>
                    </div>
                    <div>
                        <Link to={"/Register"}>
                            <button className='navbar_login'>Giriş</button>
                        </Link>

                    </div>
                </div>

            </div>
        </>
    );
}

export default Header;
