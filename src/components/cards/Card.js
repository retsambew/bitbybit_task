import React from 'react';
import './Card.css';
export const Card = (props) => {

    return (
        <div className='card-container'>
            <div className='card-img'>
                <img src={props.obj.profile}></img>
            </div>
            <div className='card-info'>
                <h1 className='card-info-head'>{props.obj.name}</h1>
                <p className='card-info-desc'>{props.obj.desc}</p>
                <div className='card-info-links'>
                    <a href={props.obj.insta}><i className='fab fa-instagram'/></a>
                    <a href={props.obj.fb}><i className='fab fa-facebook-square'/></a>
                    <a href={props.obj.lin}><i className='fab fa-linkedin'/></a>
                </div>
            </div>
        </div>
    )
}
