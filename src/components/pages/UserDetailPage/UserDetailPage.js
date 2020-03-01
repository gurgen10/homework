import React, { Component } from 'react';
import { Row, Col, Container, Card, ListGroup} from 'react-bootstrap';
import {  withRouter, Link } from 'react-router-dom';


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

        const users = getUsers();
        // const lastThreeUsers = users.reduceRight((accumulator, currentValue, index, array, initialValue) => {
        //     if(index < 3) {
        //         accumulator.push(currentValue)
        //     }

        // },[user] )
        // this.setState({lastThreeUsers});
     }
     

    render() {  
        const { user, lastThreeUsers } = this.state;

        if(!user) return <Loading />
        const castTreeUsers = lastThreeUsers.map(user => {
            return (
                <Link to={`user/${user.id}`}>
                    <ListGroup.Item key={user.id}>
                        <img style={{width: '200px'}} src={'/' + user.profileImage} alt={user.lastName + ' ' + user.lastName}/>
                    </ListGroup.Item>
                </Link>
               
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
                        <ListGroup.Item>Firstname: {user.firstName}</ListGroup.Item>
                        <ListGroup.Item>Lasttname: {user.lastName}</ListGroup.Item>
                        <ListGroup.Item>Age: {user.age}</ListGroup.Item>
                        <ListGroup.Item>Gender: {user.gender}</ListGroup.Item>
                    </ListGroup>
                    </Card>
                </Col>
                </Row>
                <Row>
                    <ListGroup variant="flush">
                        { castTreeUsers }
                    </ListGroup>

                </Row>
            </Container>
        )
    }
}

export default withUserDetailPage(withRouter(UserDetailPage));
