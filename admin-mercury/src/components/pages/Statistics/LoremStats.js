import React from 'react';
import { Line } from 'react-chartjs-2';
import LineChartConfig from './../../config/LineStatsConfig';
import _map from 'lodash/map';

import './LoremStats.css';

const ChartItem = ({ data, options }) => (
    <div className="LChartCaption">
        <div className="description text-center">
            <p>{data.description.first}</p>
            <p>{data.description.second}</p>
        </div>

        <div className="ChartLine">
            <Line data={data.info} options={options} />
        </div>
    </div>
);

class LoremStats extends React.Component {
    render() {
        const options = {
            legend: {
                display: false
            },
            elements: { point: { radius: 0 } },
            scales: {
                xAxes: [
                    {
                        gridLines: {
                            display: false,
                            drawBorder: false
                        },
                        ticks: {
                            display: false
                        }
                    }
                ],
                yAxes: [
                    {
                        gridLines: {
                            display: false,
                            drawBorder: false
                        },

                        ticks: {
                            display: false
                        }
                    }
                ]
            }
        };

        return (
            <div className="ChartsSection LineChart">
                {_map(LineChartConfig, (item, index) => (
                    <ChartItem key={index} data={item} options={options} />
                ))}
            </div>
        );
    }
}

export default LoremStats;