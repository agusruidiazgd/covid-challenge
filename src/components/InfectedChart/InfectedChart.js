import React from 'react';
import { Line } from 'react-chartjs-2';
import './InfectedChart.scss';
import {dateFormat,orderDates} from '../../services/services';

const InfectedChart = ({infected}) => {

    const dates = infected.map(item =>{
        let date = dateFormat(item.infect_date)
        return date ;
    })

    const infectedbyDate = orderDates(dates).reduce((counter, date) =>{
        counter[date] = (counter[date] || 0) + 1;
        return counter;
    },{});
    
    const data = {
        labels:Object.keys(infectedbyDate),
        datasets: [
            {
                type: 'line',
                label: '# of Infected',
                borderColor: `#ce463d`,
                borderWidth: 2,
                fill: false,
                data: Object.values(infectedbyDate),
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
