import React from 'react';
import './header.styles.scss'
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {Link} from 'react-router-dom';

const Header =()=>(
    <div className="header">
        <Link to="/" className="logo-container">
            <Logo />
        </Link>
        <div className="options">
            <Link to="/shop" className="option">SHOP</Link>
            <Link to="/" className="option">Contact Us</Link>
        </div>
    </div>
)
export default Header;