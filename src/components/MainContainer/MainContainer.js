import React from 'react';
import Card from '../Card/Card';
import './MainContainer.scss';
import {Link} from 'react-router-dom';

const MainContainer = () =>{

    //const pages = ['List of infected','Evolution by country'];

    return(
        <main>
            <Card>
                <Link to = '/infected'>List of infected</Link>
            </Card>
            <Card>
                <Link to = '/countries'>Evolution by country</Link>
            </Card>
        </main>
    )
}

export default MainContainer;
