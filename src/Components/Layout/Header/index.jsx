import React from 'react';
import { Link } from 'react-router-dom';
import images from '../../../Assets/Images/js/images';


function Header() {


    return (
        <>
            <div className="Container">
                <div className="border-bottom-line">
                    <div className="logo_SearchBar">
                        <Link to={"/"}>
                            <img src={images.Logo} alt="E-Legal" />

                        </Link>
                    </div>

                    
                </div>
            </div>
        </>
    );
}

export default Header;
