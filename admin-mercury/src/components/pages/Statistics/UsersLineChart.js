import React from 'react';
import { Line } from 'react-chartjs-2';

import StatisticData from './../../config/LineStatisticConfig';

class UsersLineChart extends React.Component {
    render() {
        return (
            <div className="ChartsSection">
                <header className="ChartsHeader">
                    <h3 className="ChartsTitle">Active users</h3>
                    <div>
                        <button>
                            <i className="fa fa-pencil" aria-hidden="true" />
                        </button>
                        <button>
                            <i className="fa fa-trash" aria-hidden="true" />
                        </button>
                    </div>
                </header>
                <Line data={StatisticData.data} options={StatisticData.options} />
            </div>
        );
    }
}

export default UsersLineChart;