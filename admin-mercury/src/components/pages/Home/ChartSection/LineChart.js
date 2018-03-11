import React from 'react';
import { Line } from 'react-chartjs-2';

import DropdownList from './../../../Dropdown/DropdownList';
import LineChartConfig from './../../../config/LineChartConfig';

export default class LineChart extends React.Component {
    constructor(props) {
        super(props);
        this.updateData = this.updateData.bind(this);
        this.state = {
            name: 'Last Year'
        };
    }

    updateData = value => {
        this.setState({ name: value });
    };

    render() {
        return (
            <div className="ChartsSection">
                <header className="ChartsHeader">
                    <h3 className="ChartsTitle">Report</h3>
                    <DropdownList
                        action="Period"
                        activeTab="Last Year"
                        anotherTab="This Week"
                        updateData={this.updateData}
                    />
                </header>

                {this.state.name === 'Last Year' && (
                    <Line data={LineChartConfig.lastYear} options={LineChartConfig.options} />
                )}
                {this.state.name === 'This Week' && (
                    <Line data={LineChartConfig.thisYear} options={LineChartConfig.options} />
                )}
            </div>
        );
    }
}