import React from 'react';
import logo from '../../assets/bitbybit_logo.png';
import './NavBar.css';

export const NavBar = () => {
    return (
        <div className='nav-container'>
            <a href='https://www.bitbybitclub.tech/' className='nav-logo'>
                <img src={logo}/>
                <h3>Bit By Bit</h3>
            </a>

            <div className='nav-menu'>
                <a className='nav-link' href='#'>Help</a>
                <a className='nav-link' href='#'>About us</a>
                <a className='nav-link' href='#'>Explore</a>
                <a className='nav-link' href='#'>Blog</a>
                <a className='nav-link' href='#'>Connect</a>
            </div>
        </div>
    )
}
