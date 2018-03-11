import React from 'react';
import { Link } from 'react-router-dom';

import Badge from 'material-ui/Badge';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton'
import MenuItem from 'material-ui/MenuItem';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';

import Ava from './../../assets/images/ava.jpg';
import './TopBar.css';



class TopBar extends React.Component {
    constructor(props) {
        super(props);

        this.handleSidebar = this.handleSidebar.bind(this);
        this.clearStorage = this.clearStorage.bind(this);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isLoggedIn: true,
            isSidebarOpen: false,
            isSearchOpen: false
        };
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    handleSidebar(e) {
        e.preventDefault();
        this.props.toggleSidebar();
    }


    clearStorage() {
        localStorage.setItem ('userExist', 'no exist');
        this.props.push('/login');
    }


    render() {
        return (
            <header className="TopBar" id="nav">
                <div className="TopNav">
                    <div className="SidebarBtn">

                        <button className onClick={this.handleSidebar}>
                            <i className="fa fa-caret-left"/>
                            <i className="fa fa-bars" aria-hidden="true" />
                        </button>

                        <button className="SearchBtn">
                            <i  className="fa fa-search"/>
                        </button>
                    </div>

                    <div className="UserBtn">
                        <button className="AddBtn">
                            <p>+  Add project</p>
                        </button>


                        <button className="header-main-btn">
                            <i className="fa fa-envelope" aria-hidden="true" />
                        </button>


                        <button>
                            <Badge
                                badgeContent={4}
                                primary={true}
                                badgeStyle={{top: 12, right: 12}}
                            >
                                <NotificationsIcon />
                            </Badge>
                        </button>

                        <div className="UserIcon">
                            <img
                                src={Ava}
                                alt="user-ava"
                                style={{ width: 35, height: 35 }}
                                className="avaImg"
                            />
                        </div>

                        <IconMenu
                            iconButtonElement={
                                <IconButton touch={true}>
                                    <NavigationExpandMoreIcon />
                                </IconButton>
                            }
                        >
                            <MenuItem primaryText="New Photo" />
                            <MenuItem>
                                <Link to="" onClick={this.clearStorage}>
                                    Log Out
                                </Link>
                            </MenuItem>
                        </IconMenu>

                    </div>
                </div>
            </header>
        )
    }
}

export default TopBar;