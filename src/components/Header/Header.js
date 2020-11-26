import React from 'react';
import './Header.scss';
import Card from '../Card/Card';
import {Link} from 'react-router-dom';
//import '../../abstract/variables.scss';

const Header = () =>{
    return(
        <header className='main-header'>
            <h1>CORONAVIRUS App</h1>
            <nav>
                <Link to = '/'>Home</Link>
                <Link to = '/infected'>List of infected</Link>
                <Link to = '/countries'>Evolution by country</Link>
            </nav>
        </header>
    )
};

export default Header;
