import React from 'react'
import {Doughnut} from "react-chartjs-2";
import './Diagram.scss'

const maxForecast = 15000

const ExternalDiagram = ({value}) => {
    const data = {
        datasets: [
            {
                label: '# of Votes',
                data: [value,maxForecast - value],
                backgroundColor: [
                    'rgba(196, 196, 196, 1)',
                    'rgba(232, 232, 232, 1)'
                ],
                borderWidth: 0,
                rotation: 180,
                circumference: 270,
            },
        ],
    };

    const options = {
        cutout: 75,
        animation: {
            animationRotate: true,
            duration: 2000
        },
        legend: {
            display: false
        },
        tooltips: {
            enabled: false
        }
    }
    return (
        <div className="ExternalDiagram">
            <Doughnut data={data} options={options}/>
        </div>
    )
}

export default ExternalDiagram