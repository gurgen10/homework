import React, { Component } from 'react';
import './App.css';
import UserService from  '../../services/UserService';
import { MyProvider } from '../MyContext';
import UserDetail from '../UserDetail';

class App extends Component {
  userData = new UserService();

  render() {
    return (
      <MyProvider value={this.userData}>
       <UserDetail/>
      </MyProvider>
    );
  }
}

export default App;
