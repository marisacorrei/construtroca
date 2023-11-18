import React from 'react';
import './Header.css';
import headerImg from '../images/construtroca.png';

function Header() {
    return(
        <header>
            <div>
                <img src={headerImg} />
            </div>
        </header>
    )
}
 
export default Header;