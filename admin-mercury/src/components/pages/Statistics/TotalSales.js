import 'react-circular-progressbar/dist/styles.css';
import React from 'react';
import CircularProgressbar from 'react-circular-progressbar';
import _map from 'lodash/map';

import BarsData from './../../config/TotalSalesBarConfig';
import './TotalSales.css';


const ProgressBarsItem = ({ info }) => (
    <div className="col-12 col-md-4">
        <div className="Progressbar">
            <div className="BarItem">
                <CircularProgressbar
                    percentage={info.percentages}
                    className={`BarItem-${info.color}`}
                />
            </div>

            <div className="description">
                <p>{info.description.first}</p>
                <p>{info.description.second}</p>
            </div>
        </div>
    </div>
);

class TotalSales extends React.Component {
    render() {
        return(
            <div className="ChartsSection">
                <div className="ChartsHeader">
                    <h3 className="ChartsTitle">Total sales</h3>

                    <div>
                        <button>
                            <i className="fa fa-pencil" aria-hidden="true" />
                        </button>
                        <button>
                            <i className="fa fa-trash" aria-hidden="true" />
                        </button>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        {_map(BarsData, (item, index) => (
                            <ProgressBarsItem key={index} info={item} />
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default TotalSales;