import React from 'react'
import {Doughnut} from "react-chartjs-2";
import './Diagram.scss'

const maxNIT = 10000

const InternalDiagram = ({value}) => {
    const data = {
        datasets: [
            {
                label: '# of Votes',
                data: [value,maxNIT-value],
                backgroundColor: [
                    'rgba(253, 126, 0, 1)',
                    'rgba(232, 232, 232, 1)'
                ],
                borderWidth: 0,
                rotation: 180,
                circumference: 270,
            },
        ]
    };
    const options = {
        cutout: 45,
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
        <div className="InternalDiagram">
            <Doughnut data={data} options={options}/>
        </div>
    )
}

export default InternalDiagram