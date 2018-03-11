import React from 'react';
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import './Layout.css';

class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebarStatus: 'open'
        };

        this.toggleSidebar = this.toggleSidebar.bind(this);
    }

    toggleSidebar() {
        let sidebarStatus = this.state.sidebarStatus === 'open' ? 'close' : 'open';
        this.setState({sidebarStatus})

    }

    render() {
        return (
            <div className="layout">
                <Sidebar className={this.state.sidebarStatus} />

            <div className={"WrapperMain " + this.state.sidebarStatus}>
                <TopBar toggleSidebar={this.toggleSidebar} />
                <div className="MainContent">
                    {this.props.children}
                </div>
            </div>
        </div>
        )
    }
}

export default Layout;