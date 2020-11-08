import React from 'react';
import logo from '../../../Icon/Logo.png';
import css from './Header.css';
const Header = () => {
    return (
        <div>
            <div className="logo">
                <img src={logo} alt="This is a logo"/> 
            </div>
           <div>
                <nav>
                  <input type="text" placeholder="Search your Destination"/>
                  <a href="/news">News</a>
                  <a href="/destination">Destination</a>
                  <a href="/blog">Blog</a>
                  <a href="/contact">Contact</a>
                  <button>Login</button>
                </nav>
           </div>
        </div>
    );
};

export default Header;