
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App'

import "./Assets/Styles/home.scss"
import "./Assets/Styles/kontakt.scss"
import "./Assets/Styles/faq.scss"
import "./Assets/Styles/bloq.scss"
import "./Assets/Styles/navbar.scss"
import "./Assets/Styles/login.scss"
import "./Assets/Styles/footer.scss"
import "./Assets/Styles/chat.scss"
import "./Assets/Styles/otp.scss"
import "./Assets/Styles/bloqdetails.scss"
import 'bootstrap/dist/css/bootstrap.min.css';

import AOS from 'aos';
import 'aos/dist/aos.css';
// ..
AOS.init();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router >
      <App />
    </Router>,
);