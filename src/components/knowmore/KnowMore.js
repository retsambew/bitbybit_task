import React from 'react';
import './Know.css';
import { Block } from './Block.js'; 

export const KnowMore = () => {
    const blocks=[
        {head:'Lorem Ipsum',body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend convallis leo, sed elementum lorem mollis in.'},
        {head:'Lorem Ipsum',body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend convallis leo, sed elementum lorem mollis in. Phasellus ac nulla convallis, aliquet metus a, lacinia ante. Curabitur bibendum purus quis risus cursus, ac pretium mi elementum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'},
        {head:'Lorem Ipsum',body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend convallis leo, sed elementum lorem mollis in.'},
        {head:'Lorem Ipsum',body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend convallis leo, sed elementum lorem mollis in.'},
    ];
    return (
        <div className='know-container'>
            <div className='know-subcontainer'>
                <div className='know-info'>
                    <h1 className='know-info-head1'>Lorem Ipsum</h1>
                    <h1 className='know-info-head2'>Lorem Ipsum</h1>
                    <p className='know-info-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend convallis leo, sed elementum lorem mollis in. Phasellus ac nulla convallis, aliquet metus a, lacinia ante. Curabitur bibendum purus quis risus cursus, ac pretium mi elementum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                    <button className='know-info-button'>Know More</button>
                </div>
                <div className='know-blocks'>
                    {blocks.map( blck =>
                        <Block head={blck.head} body={blck.body}/>
                    )}
                </div>
            </div>
        </div>
    )
}
