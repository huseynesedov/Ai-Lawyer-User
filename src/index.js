
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App'

import "./Assets/Styles/home.scss"
import "./Assets/Styles/faq.scss"
import "./Assets/Styles/navbar.scss"
import "./Assets/Styles/login.scss"
import "./Assets/Styles/footer.scss"
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router >
      <App />
    </Router>,
);