import React from 'react';
import './Block.css';

export const Block = (props) => {
    return (
        <div className='block'>
            <h1>{props.head}</h1>
            <p>{props.body}</p>
        </div>
    )
}
