import React from 'react';
import {connect} from 'react-redux'
import './header.styles.scss'
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase.utili';

const Header =({currentUser})=>(
    <div className="header">
        <Link to="/" className="logo-container">
            <Logo />
        </Link>
        <div className="options">
            <Link to="/shop" className="option">SHOP</Link>
            <Link to="/" className="option">Contact Us</Link>
            {
                currentUser ?
                <div className="option" onClick={()=>auth.signOut()}>Sign Out</div> :
                <Link to="/sign" className="option">SignIn</Link>
            }
            
        </div>
    </div>
)
const mapStateToPro = (state) =>({
currentUser:state.user.currentUser
})
export default connect(mapStateToPro)(Header);