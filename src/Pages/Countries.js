import React, {useEffect, useState} from 'react';
import CountryTable from '../components/Tables/CountryTable';
import {getCountries} from '../services/services';
import BarChart from '../components/BarChart/BarChart';
import './pages.scss';


const Country = () =>{
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const promise = getCountries();
        promise.then(data => { 
            setCountries(data);
        });
    }, []);

    return(
        <section id="countries" className="page">
            <header className="page-header">
                <h3>EVOLUTION BY COUNTRY</h3>
            </header>
            <CountryTable countries={countries}/>
            <BarChart countries={countries}/>
        </section>
    )
}

export default Country;