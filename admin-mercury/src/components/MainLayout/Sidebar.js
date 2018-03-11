import React from "react";
import {NavLink} from 'react-router-dom';

import Logo from './../../assets/images/Logo.png';
import './Sidebar.css';

class Sidebar extends React.Component {

    render() {
        const mainNav = [
            {
                Link: '/',
                label: 'Home',
                icon: 'fa fa-home fa-fw" aria-hidden="true'
            },
            {
                Link: '/workflow',
                label: 'Workflow',
                icon: 'fa fa-th-large fa-fw" aria-hidden="true'
            },
            {
                Link: '/statistics',
                label: 'Statistics',
                icon: 'fa fa-bolt fa-fw" aria-hidden="true'
            },
            {
                Link: '/calendar',
                label: 'Calendar',
                icon: 'fa fa-calendar fa-fw" aria-hidden="true'

            },
            {
                Link: '/users',
                label: 'Users',
                icon: 'fa fa-user-o fa-fw" aria-hidden="true'
            },
            {
                Link: '/settings',
                label: 'Settings',
                icon: 'fa fa-cog fa-fw" aria-hidden="true'
            }
        ];

        return (
            <div className={"LeftBar " + this.props.className}>
                <div className="SideLogo">
                    <img src={Logo} alt="Logo"/>
                </div>

                <nav>
                    <ul className="SideBarList">
                        {mainNav.map((item, index) =>
                            <li key={index}>
                                <NavLink exact to={item.Link} activeClassName="activeNav">
                                    <i className={item.icon}/>
                                    {item.label}
                                </NavLink>
                            </li>
                        )}
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Sidebar;
