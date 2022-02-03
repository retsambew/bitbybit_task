import React from 'react';
import Img from '../../assets/profile2.jpg';
import './Home.css';

export const Home = () => {
    return (
        <div className='home-container'>
            <div className='home-info'>
                <h1>Hi, I'm Naman</h1>
                <p>Hello, I'm Naman Arora and this is my submission for alloted task for technical team selection in BitByBit Club.</p>
                <div className='home-info-btn'><a href='https://drive.google.com/file/d/1ozZcy_kY4EocGn4eXJ5_UOBAZKO0Nlq0/view?usp=sharing'>Download Resume!</a></div>
            </div>
            <div className='home-img'>
                <img src={Img} alt='image'></img>
            </div>
        </div>
    )
}
