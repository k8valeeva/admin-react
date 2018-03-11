import React from 'react';
import { Row, Col } from "reactstrap";

import Tasks from "./Tasks/Tasks";
import Messages from "./Messages/Messages";
import Activity from "./Activity/Activity";

class Notification extends React.Component {
    render() {
        return (
            <Row>
                <Col xs="12" lg="4">
                    <Tasks/>
                </Col>
                <Col xs="12" lg="4">
                    <Messages/>
                </Col>
                <Col xs="12" lg="4">
                    <Activity/>
                </Col>
            </Row>
        );
    }
}

export default Notification;