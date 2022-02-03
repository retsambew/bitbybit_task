import React from 'react';
import './index.css';
import MySlider from './MySlider.js';

export const Carousel = () => {
    return (
        <div className='caro-container'>
            <div className='caro-subcontainer'>
                <h1>Carousel</h1>
                <MySlider/>
            </div>
        </div>
    )
}
