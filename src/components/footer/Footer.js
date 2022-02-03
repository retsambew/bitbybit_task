import React from 'react'
import './Footer.css';

export const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer-menu'>
                <a className='footer-link' href='#'>NEWS</a>
                <a className='footer-link' href='#'>SPORT</a>
                <a className='footer-link' href='#'>WEATHER</a>
                <a className='footer-link' href='#'>FUTURE</a>
            </div>
            <div className='go-top'>
                <i className='fas fa-angle-up fa-3x'/>
            </div>
        </div>
    )
}
