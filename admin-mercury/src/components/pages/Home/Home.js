import React from 'react';
import ChartsSection from "./ChartSection/ChartsSection";
import Notification from "./Notification/Notification";

import './Home.css';

class Home extends React.Component {
    render() {
        const user = JSON.parse(localStorage.getItem("username"));
        return(
            <div className="HomePage">
                <h2 className="UserName">Hello {user}!</h2>
                
                <ChartsSection/>
                <Notification/>
            </div>
        )
    }
}

export default Home;