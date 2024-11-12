import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';

function Header() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Token'ı localStorage'dan al
        const token = localStorage.getItem('token') || localStorage.getItem('google-token');
        if (token) {
            try {
                const decodedToken = jwtDecode(token);
                setUser({
                    fullName: decodedToken.FullName,
                });
            } catch (error) {
                console.error('Invalid token:', error);
            }
        }
    }, []);

    const handleLogout = () => {
        // Token'ları localStorage'dan sil
        localStorage.removeItem('token');
        localStorage.removeItem('google-token');
        // Kullanıcıyı giriş sayfasına yönlendir
        navigate('');
        // Kullanıcı bilgisini sıfırla
        setUser(null);
    };

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

                        <div className='d-flex nav_menu'>
                            <ul>
                                <Link to={"/"}>
                                    <li>Ana Səhifə</li>
                                </Link>
                                <Link to={"/Faq"}>
                                    <li>FAQ</li>
                                </Link>
                                <Link to={"/Bloq"}>
                                    <li>Bloq</li>
                                </Link>
                                <Link to={"/Kontakt"}>
                                    <li>Kontakt</li>
                                </Link>
                            </ul>
                        </div>

                        <div className="d-flex align-items-center">
  {user ? (
    <>
      <span className='user-name me-3'>{user.fullName}</span>
      <button className='navbar_login' onClick={handleLogout}>Logout</button>
    </>
  ) : (
    <>
      <Link to={"/Login"}>
        <button className='navbar_login'>Giriş</button>
      </Link>
      <Link to={"/Register"} className="ms-2">
        <button className='navbar_login'>Qeydiyyat</button>
      </Link>
    </>
  )}
</div>

                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
