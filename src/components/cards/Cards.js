import React from 'react'
import {Card} from './Card.js';
import './Cards.css';
import img1 from '../../assets/profile.jpeg';
import img2 from '../../assets/profile.jpeg';
import img3 from '../../assets/profile.jpeg';

export const Cards = () => {
    /*
    we can also use setState and map here to set n cards.
    but as data is not dynamic here, it won't make sence to create another function
    to set state that can rather be inserted directly.
    */
   const myCards=[
       {name:'Naman Arora',desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend convallis leo, sed elementum lorem mollis in.', insta:'', fb:'#', lin:'', profile:img1},
       {name:'Naman Arora',desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend convallis leo, sed elementum lorem mollis in.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend convallis leo, sed elementum lorem mollis in.', insta:'', fb:'#', lin:'', profile:img2},
       {name:'Naman Arora',desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend convallis leo, sed elementum lorem mollis in.', insta:'', fb:'#', lin:'', profile:img3},
   ];
    return (
        <div className='cards-container'>
            {myCards.map( card =>
                <Card obj={card}/>
            )}
        </div>
    )
}
