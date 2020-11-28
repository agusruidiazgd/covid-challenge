import React from 'react';
import './TableStyle.scss';

const CountryTable = ({countries}) =>{
    return(
        <table className="table-container country">
            <thead>
                <tr>
                    <th>Country</th>
                    <th>Infected</th>
                </tr>
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
