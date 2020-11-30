import React from 'react';
import './Counter.scss'

const Counter = ({infected}) =>{
    return(
        <aside>
            <h4>Number of infected</h4>
            <p>{infected.length}</p>
        </aside>
    )
}

export default Counter;
