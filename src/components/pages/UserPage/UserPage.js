import React, { Component } from 'react';
import {Tab, Row, Col, Nav, Container} from 'react-bootstrap';
import PlanetCard from '../PlanetCard';
import './Tabs.scss';
import { MyConsumer } from '../../MyContext';

export default class UserPage extends Component {

    render() {
        return (
            <Container className="mt-5">
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item className="border-bottom">
                                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="border-bottom">
                                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <PlanetCard name={'first'}/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <PlanetCard name={'second'}/>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        )
    }
}
