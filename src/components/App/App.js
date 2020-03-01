import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

import UserService from  '../../services/UserService';
import UserPage from  '../pages/UserPage';
import UserDetail from  '../UserDetail';
import { MyProvider } from '../MyContext';
import { Row, Col, Container} from 'react-bootstrap';

class App extends Component {
  state= {
    userId: null
  }
  userData = new UserService();

  receveFirstUserId = (userId) => {
    
    
    this.setState({ userId });
  }

  render() {
    const { userId } = this.state;
    console.log('userId',userId);
    return (
      <MyProvider value={this.userData}>
        <Router>
          <Container>
            <Row>
              <Col xs lg="2"> 
                <UserPage receveFirstUserId={this.receveFirstUserId}/>
              </Col>
              <Col md="auto">
                <Switch>
                  {
                  this.state.userId ?
                    <Route exact path="/" >
                    { <Redirect to={`/user/${this.state.userId}` }/> }
                  </Route> 
                  : null }
                  <Route exact path="/user/:userId" component={UserDetail}/>
                </Switch>
              </Col>
            </Row>
          </Container>
        </Router>
      </MyProvider>
    );
  }
}

export default App;
