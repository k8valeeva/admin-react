import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import './../../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

import users from './usersData';
import './Users.css';

function defaultFormat(value){
    return value;
}

function nameFormatter(value, row) {
    return (
        <div className="NameInfo">
            <img src={row.icon} />
            <div>
                <p><b>{value.main}</b></p>
                <p className="styleWork"><b>{value.secondary}</b></p>
            </div>
        </div>
    );
}

function activityFormatter(value, row) {
    if(value === false){
        return row.activity;
    }
    return 'online'
}

let someData;
someData = [

    {path: 'phone', title: 'User Phone'},
    {path: 'email', title: 'Mail'},
];

class Users extends React.Component {
    constructor(props) {
        super(props);
        this.order = 'asc';


    }

    static renderShowsTotal(start, to, total) {
        return (
            <p style={ { color: 'blue' } }>
                From { start } to { to }, totals is { total }&nbsp;&nbsp;(its a customize text)
            </p>
        );
    }

    handleActivityChange = () => {
        if (this.order === 'desc') {
            this.refs.table.handleSort('desc', 'online');
            this.order = 'asc';
        } else {
            this.refs.table.handleSort('asc', 'online');
            this.order = 'desc';
        }
    };

    render() {
        const options = {

            sizePerPageList: [ {
                text: '5', value: 5
            }, {
                text: '10', value: 10
            }, {
                text: 'All', value: users.length
            } ], // you can change the dropdown list for size per page
            sizePerPage: 7,  // which size per page you want to locate as default
            pageStartIndex: 1, // where to start counting the pages
            paginationSize: 5,  // the pagination bar size.
            prePage: 'Prev', // Previous page button text
            nextPage: 'Next', // Next page button text
            firstPage: 'First', // First page button text
            lastPage: 'Last', // Last page button text
            paginationShowsTotal: this.renderShowsTotal,  // Accept bool or function
            paginationPosition: 'bottom'  // default is bottom, top and both is all available
            // hideSizePerPage: true > You can hide the dropdown for sizePerPage
            // alwaysShowAllBtns: true // Always show next and previous button
            // withFirstAndLast: false > Hide the going to First and Last page button
        };

        return(
            <div>
                <div>
                    <div className="UsersHeader">
                        <h2 className="UsersCaption">Users
                            <span>({128})</span>
                        </h2>

                        <select onChange={this.handleActivityChange} className="ActivitySelect">
                            <option value='asc'>Online First</option>
                            <option value='desc'>Offline </option>
                        </select>
                    </div>

                    <BootstrapTable ref="table" data={users} keyField='id' options={options} pagination>
                        <TableHeaderColumn dataField={'name'} dataFormat={nameFormatter}>User</TableHeaderColumn>
                        <TableHeaderColumn dataField={'online'} dataFormat={activityFormatter}>Last activity</TableHeaderColumn>
                        {someData.map((someData) =>

                            <TableHeaderColumn dataField={someData.path} dataFormat={defaultFormat}>{someData.title}</TableHeaderColumn>
                        )}
                    </BootstrapTable>
                </div>
            </div>
        );
    }
}

export default Users;
