import React from 'react';
import { Row, Col } from 'reactstrap';

import DoughnutChart from "./DoughnutChart";
import LineChart from "./LineChart";
import './ChartsSection.css';

class ChartsSection extends React.Component {
    render() {

        return(
            <Row>
                <Col xs="12" lg="6">
                    <DoughnutChart />
                </Col>
                <Col xs="12" lg="6">
                    <LineChart/>
                </Col>
            </Row>
        )
    }
}

export default ChartsSection;

