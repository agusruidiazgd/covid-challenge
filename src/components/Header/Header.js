import React from 'react';
import './Header.scss';
import {Link} from 'react-router-dom';
import Counter from '../Counter/Counter';

const Header = ({infected}) =>{
    return(
        <header className='main-header'>
            <h1>CORONAVIRUS App</h1>
            <Counter infected={infected}/>
            <nav>
                <Link to = '/'>Home</Link>
                <Link to = '/infected'>List of infected</Link>
                <Link to = '/countries'>Evolution by country</Link>
            </nav>
        </header>
    )
};

export default Header;
