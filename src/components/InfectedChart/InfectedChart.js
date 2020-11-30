import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import './InfectedChart.scss';
import {dateFormat,sortByDate} from '../../services/services';

const InfectedChart = ({infected}) => {

    const infectedByDate = sortByDate(infected);

    const dates = infected.map(item =>{
        let date = dateFormat(item.infect_date)
        console.log(date)
        return date ;
    })


    const data = {
        labels: dates,
        datasets: [
            {
                type: 'line',
                label: '# of Infected',
                borderColor: `#ce463d`,
                borderWidth: 2,
                fill: false,
                data: [1,3,5,6,8,9,4],
            },
        ]
    }

    const options = {
        scales: {
            yAxes:[{
                ticks:{
                    beginAtZero: true,
                }
            }],
            xAxes:[{
                gridLines:{
                    display: false,
                }
            }]
            // xAxes: [{
            //     type: 'time',
            //     ticks: {
            //         min: 'Jan 2019'
            //     },
            //     time: {
            //         unit: 'month',
            //         displayFormats: {
            //             quarter: 'MMM YYYY'
            //         }
            //     }
            // }]
        }
    } 
    return (
        <section className="bar-container">
            <Line
                data={data}
                options={options}
            />
        </section>
    )
}

export default InfectedChart;
