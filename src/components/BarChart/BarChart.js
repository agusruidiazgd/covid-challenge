import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';
import './BarChart.scss';

const BarChart = ({countries}) => {

    const infectedByCountry = countries.map(country => country.infected)

    const nameByCountry = countries.map(country =>country.name)

    const data = {
        labels: nameByCountry,
        datasets: [
        {
        label: 'Infected by country',
        data: infectedByCountry,
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
        },
    ],
    }

    return(
        <div className='pie-chart-container'>
            <HorizontalBar data={data} />
        </div>
        
    )
}


export default BarChart;
