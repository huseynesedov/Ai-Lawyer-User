import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import images from '../../../Assets/Images/js/images';

function Header() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [userInfo, setUserInfo] = useState({ username: '', email: '' });

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            try {
                const decoded = jwtDecode(token);
                setUserInfo({ 
                    UserName: decoded.UserName, 
                    Email: decoded.Email 
                });
            } catch (error) {
                console.error("Invalid token", error);
            }
        }
    }, []);

    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const closeMobileMenu = () => setIsMobileMenuOpen(false);

    return (
        <>
            <header className='Header'>
                <div className="container">
                    <div className="myNav d-flex align-items-center justify-content-between">
                        <div className="logo_SearchBar">
                            <Link to={"/"}>
                                <p className='fs-28 fw-400 color-black'>
                                    E-Legal
                                </p>
                            </Link>
                        </div>

                        {/* Desktop Menu */}
                        <nav className="nav_menu">
                            <ul>
                                <Link to={"/"}><li>Ana Səhifə</li></Link>
                                <Link to={"/Faq"}><li>FAQ</li></Link>
                                <Link to={"/Bloq"}><li>Bloq</li></Link>
                                <Link to={"/Kontakt"}><li>Kontakt</li></Link>
                            </ul>
                        </nav>

                        <div className="userDropdown">
                            <div
                                className="w-100 d-flex align-items-center justify-content-between"
                                style={{ cursor: "pointer" }}
                                onClick={toggleDropdown}
                            >
                                <div className="userImg">
                                    <img src={images.user} alt="User" />
                                </div>
                                <img
                                    src={images.arrowdown}
                                    alt="Dropdown Arrow"
                                    style={{
                                        transform: isDropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                                        transition: "transform 0.3s ease"
                                    }}
                                />
                            </div>
                            <div className={`UserDropOpen ${isDropdownOpen ? 'open' : ''}`}>
                                <div className="UserInfo">
                                    <span className='t-44'>{userInfo.UserName || ""}</span>
                                    <div className='t-79'>{userInfo.Email || ""}</div>
                                </div>
                                <Link to={"/Login"}>
                                    <div className="Login d-flex">
                                        <img src={images.Login} alt="Login" />
                                        <span className='t-79 ms-4'>Daxil ol</span>
                                    </div>
                                </Link>
                                <Link to={"/Register"}>
                                    <div className="Login d-flex">
                                        <img src={images.Login} alt="Create Account" />
                                        <span className='t-79 ms-4'>Hesab Yarat</span>
                                    </div>
                                </Link>
                                <hr className='mt-5' style={{ border: "1px solid #E2E8F0" }} />
                                <div className="t-79" style={{ marginTop: "-8px" }}>
                                    Cixis
                                </div>
                            </div>
                        </div>

                        {/* Mobile Menu Toggle Button */}
                        <div className="menu-toggle" onClick={toggleMobileMenu}>
                            <img src={images.menuIcon} alt="Menu Icon" />
                        </div>
                    </div>
                </div>

                {isMobileMenuOpen && <div className="overlay" onClick={closeMobileMenu}></div>}
                <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                    <button className="close-btn" onClick={closeMobileMenu}>×</button>
                    <nav>
                        <ul>
                            <Link to={"/"} onClick={closeMobileMenu}><li>Ana Səhifə</li></Link>
                            <Link to={"/Faq"} onClick={closeMobileMenu}><li>FAQ</li></Link>
                            <Link to={"/Bloq"} onClick={closeMobileMenu}><li>Bloq</li></Link>
                            <Link to={"/Kontakt"} onClick={closeMobileMenu}><li>Kontakt</li></Link>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
}

export default Header;
