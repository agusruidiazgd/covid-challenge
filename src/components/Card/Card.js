import React from 'react';
import './Card.scss';


const Card = ({children}) =>{
    return(
        <div className='card'>
            <h2>{children}</h2>
        </div>
    )
};

export default Card;
