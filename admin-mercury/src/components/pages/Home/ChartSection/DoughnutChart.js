import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import map from 'lodash/map';
import keyIndex from 'react-key-index';

import './ChartsSection.css'


const createChartData = (rawData) => {
    return {
        labels: rawData.labels,
        datasets: [{
            data: rawData.data,
            backgroundColor: rawData.bg,
            hoverBackgroundColor: rawData.bg,
            borderWidth: 0
        }]
    };
};

const ChartLabel = (props) => {
    return <li className="LegendItem">
            <span className="LegendColor"
                  style={{background: props.color}}/>

            <span className="LegendValue">
                {props.value}
            </span>
    </li>
};

const chartData = {
    'LastYear': {
        labels: [
            'Websites',
            'Logo',
            'Social media',
            'Adwords',
            'E-commerce'
        ],
        data: [
            184,
            290,
            540,
            200,
            300
        ],
        bg: [
            '#25396e',
            '#5584ff',
            '#4b74e0',
            '#3755a4',
            '#4164c2'
        ]
    },

    'ThisYear': {
        labels: [
            'Websites',
            'Logo',
            'Social media',
            'E-commerce',
            'Adwords'
        ],
        data: [
            700,
            54,
            250,
            200,
            120
        ],
        bg: [
            '#25396e',
            '#5584ff',
            '#4b74e0',
            '#3755a4',
            '#4164c2'
        ]
    },
    'LastWeek': {
        labels: [
            'Websites',
            'Logo',
            'Adwords',
            'Social media',
            'E-commerce'
        ],
        data: [
            45,
            30,
            250,
            15,
            170
        ],
        bg: [
            '#25396e',
            '#5584ff',
            '#4b74e0',
            '#3755a4',
            '#4164c2'
        ]
    },
    'LastMonth': {
        labels: [
            'Websites',
            'Logo',
            'Adwords',
            'E-commerce',
            'Social media'
        ],
        data: [
            30,
            55,
            100,
            115,
            85
        ],
        bg: [
            '#25396e',
            '#5584ff',
            '#4b74e0',
            '#3755a4',
            '#4164c2'
        ]
    },
};

class DoughnutChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPeriodData: createChartData(chartData['LastYear']),
            k: ''
        };

        this.onPeriodChoose = this.onPeriodChoose.bind(this);
        this.countTotalSales = this.countTotalSales.bind(this);
    }

    onPeriodChoose(event) {
        this.setState({
            currentPeriodData: createChartData(chartData[event.target.value])
        });
    }

    countTotalSales() {
        let total=0;
        map(this.state.currentPeriodData.datasets[0].data, (item) => total+=item);
        total=total.toString();
        for(let i=total.length-3; i>0; i-=3) total = total.substr(0, i) + ','  +
            total.substr(i);
        return total;
    }

    componentWillMount() {
        this.setState({
            k: keyIndex(this.state.currentPeriodData.labels, 1)
        });
    }

    render() {
        return (
            <div className="ChartsSection">
                <div>
                    <div className="ChartsHeader">
                        <h3 className="ChartsTitle">Your sales</h3>
                            <div>
                                <select className="SelectPeriod" onChange={this.onPeriodChoose}>
                                    <option value='LastYear'>
                                        Last Year
                                    </option>

                                    <option value='ThisYear'>
                                        This Year
                                    </option>

                                    <option value='LastWeek'>
                                        Last Week
                                    </option>

                                    <option value='LastMonth'>
                                        Last Month
                                    </option>
                                </select>
                            </div>
                    </div>

                    <div className="ChartWrap">
                        <div className="ChartContain">
                            <div className="ChartText">
                                {this.countTotalSales()}
                                <span className="small">Sales</span>
                            </div>

                            <Doughnut data={this.state.currentPeriodData}
                                      options={{
                                          legend: {
                                              display: false
                                          },
                                          cutoutPercentage: 65,
                                          maintainAspectRatio: false,
                                          tooltips: {
                                              enabled: false
                                          }
                                      }} height={250}/>
                        </div>

                        <ul className="ChartLegend">
                            {
                                map(this.state.currentPeriodData.labels, (item, index) => {
                                    return <ChartLabel color={this.state.currentPeriodData.datasets[0].backgroundColor[index]}
                                        value={item} key={this.state.k[index].id}/>; })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default DoughnutChart;