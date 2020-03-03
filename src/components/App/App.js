import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { Row, Col, Container } from 'react-bootstrap';
import ErrorBoundary from '../ErrorBoundary';
import UserService from '../../services/UserService';
import UserPage from '../pages/UserPage';
import UserDetail from '../UserDetail';
import { MyProvider } from '../MyContext';


class App extends Component {
  state = {
    userId: null
  }
  userData = new UserService();

  receveFirstUserId = (userId) => {
    this.setState({ userId });
  }

  render() {
    const { userId } = this.state;
    
    
    return (
      <ErrorBoundary>
        <MyProvider value={this.userData}>
          <Router>
            <Container>
              <Row>
                <Col xs lg="2">
                  <UserPage receveFirstUserId={this.receveFirstUserId}  />
                </Col>
                <Col md="auto">
                  <Switch>
                    <Route exact path="/" >
                      { () =>  userId ? <Redirect to={`/user/${ userId }`} />   : null }
                    </Route>
                      
                    <Route path="/user/:userId"  >
                      { () =>  <UserDetail userId={userId}/> }
                    </Route>
                  </Switch>
                </Col>
              </Row>
            </Container>
          </Router>
        </MyProvider>
      </ErrorBoundary>
    );
  }
}

export default App;
