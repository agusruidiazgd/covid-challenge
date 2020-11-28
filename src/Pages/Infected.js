import React, {useEffect, useState} from 'react';
import InfectedTable from '../components/Tables/InfectedTable';
import {getInfected} from '../services/services';
import './pages.scss';


const Infected = () =>{
    const [infected, setInfected] = useState([]);

    useEffect(() => {
        const promise = getInfected();
        promise.then(data => { 
            setInfected(data);
            console.log(data);
        });
    }, []);

    return(
        <section className="page infected">
            <header className="page-header">
                <h3>INFECTED LIST</h3>
            </header>
            <InfectedTable infected={infected}/>

        </section>
    )

}

export default Infected;
