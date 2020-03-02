import React, { Component } from 'react';
import {Nav, Row, Col, Container, Card, ListGroup} from 'react-bootstrap';
import {  withRouter } from 'react-router-dom';
import './UserDetailPage.css';
import { withUserDetailPage } from '../../hoc';
import Loading from '../../Loading';

 class UserDetailPage extends Component {
     state = {
         user: null,
         lastThreeUsers: []
     }
     componentDidMount() {
        const { getUser, getUsers,  match:{params:{userId}} } = this.props;

        const user = getUser(userId);
        this.setState({user});        

        const users = getUsers().filter(item => item.id !== user.id);
        const lastThreeUsers = users.reduceRight((acc, currEl, index) => {
            if(index > users.length - 4) {                
                acc.push(currEl)
            }
            
            return acc;

        }, [] );   
        
        this.setState({lastThreeUsers });
     }
     

    render() {  
        const { user, lastThreeUsers } = this.state;

        if(!user) return <Loading />
        const lastTreeUserElements = lastThreeUsers.map(user => {
            return (
                <Nav.Link   key={user.id} href={`/user/${user.id}`} > 
                    <ListGroup.Item >
                        <img style={{width: '200px'}} src={'/' + user.profileImage} alt={user.lastName + ' ' + user.lastName}/>
                    </ListGroup.Item>
                </Nav.Link>   
            )
        })
             
        
        return (
            <Container>
                <h1>{user.firstName + ' ' + user.lastName}</h1>
                <Row>
                <Col>
                    <img style={{width: '300px'}} src={'/' + user.profileImage} alt={user.lastName + ' ' + user.lastName}/>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <ListGroup variant="flush">
                            <ListGroup.Item><i>Firstname:</i> <b>{user.firstName}</b></ListGroup.Item>
                            <ListGroup.Item><i>Lasttname:</i> <b>{user.lastName}</b></ListGroup.Item>
                            <ListGroup.Item><i>Age:</i> <b>{user.age}</b></ListGroup.Item>
                            <ListGroup.Item><i>Gender:</i> <b>{user.gender}</b></ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
                </Row>
                <Row>
                    <Col>
                    <ListGroup horizontal>
                        <Nav  className="flex-row">
                        { lastTreeUserElements }
                        </Nav>
                        
                    </ListGroup>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default withUserDetailPage(withRouter(UserDetailPage));
