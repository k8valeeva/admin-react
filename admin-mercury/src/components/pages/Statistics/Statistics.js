import React from 'react';

import LoremStats from "./LoremStats";
import UsersLineChart from "./UsersLineChart";
import TotalSales from "./TotalSales";
import DropdownList from './../../Dropdown/DropdownList';


export default class Statistics extends React.Component {
    constructor(props) {
        super(props);
        this.updateDataType = this.updateDataType.bind(this);
        this.updateDataTime = this.updateDataTime.bind(this);
        this.state = {
            activeType: 'Notifications',
            activeTime: 'Last Month'
        };
    }

    updateDataType(value) {
        this.setState({ activeType: value });
    }

    updateDataTime(value) {
        this.setState({ activeTime: value });
    }

    render() {
        return (
            <div>
                <div className="Container">
                    <header className="ChartsHeader d-flex justify-content-between">
                        <h2 className="ChartsTitle">
                            Lorem Ipsum Stats
                        </h2>

                        <div className="d-flex">
                            <DropdownList
                                action="Type"
                                activeTab="Notifications"
                                anotherTab="First Page"
                                updateData={this.updateDataType}/>

                            <DropdownList
                                action="Perioud"
                                activeTab="Last Month"
                                anotherTab="Last Year"
                                updateData={this.updateDataTime}/>
                        </div>
                    </header>

                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-5">
                            <LoremStats/>
                        </div>

                        <div className="col-sm-12 col-md-6 col-lg-7">
                            <UsersLineChart/>
                        </div>
                    </div>

                    <TotalSales />
                </div>
            </div>
        );
    }
}