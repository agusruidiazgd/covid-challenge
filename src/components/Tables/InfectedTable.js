import React from 'react';
import './TableStyle.scss';
import {dateFormat} from '../../services/services';


const InfectedTable = ({infected}) =>{
    return(
        <table id='infected-table' className="table-container infected">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Country</th>
                    <th>Age</th>
                    <th>Infect date</th>
                    <th>Gender</th>
                </tr>
            </thead>
            <tbody>
                {
                    infected.map(person=>{
                        return(
                            <tr key={person.id} className={person.live === false ? 'tr-dead': null }>
                                <td>{person.first_name} {person.last_name}</td>
                                <td>{person.country}</td>
                                <td>{person.age}</td>
                                <td>{dateFormat(person.infect_date)}</td>
                                <td>
                                    {person.female === true ? 'Female' : 'Male'}
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default InfectedTable;
