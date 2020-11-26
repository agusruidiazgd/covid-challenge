import React from 'react';
import './CountryTable.scss';

const CountryTable = ({countries}) =>{
    return(
        <table className="country-card">
            <thead>
                <th>Country</th>
                <th>Infected</th>
            </thead>
            <tbody>
                {
                    countries.map(country=>{
                        return(
                            <tr key={country.id}>
                                <td>{country.name}</td>
                                <td>{country.infected}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default CountryTable;
