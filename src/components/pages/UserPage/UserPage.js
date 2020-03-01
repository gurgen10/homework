import React, { Component } from 'react';
import { Nav, Container} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import './UserPage.css';
import { withUserList } from '../../hoc';
import Loading from '../../Loading';

 class UserPage extends Component {
     state = {
         users: null
     }
     componentDidMount() {
         const users = this.props.getUsers();
         this.setState({users});
         
         
         this.props.receveFirstUserId(users[0].id)
     }

    render() {
        const { users } = this.state;
        
        if(!users) {
            return <Loading/>
        }

        const navLinks = users.map(user => {
            
            return ( 
            <Nav.Link style={{border: '1px solid black'}} key={user.id} href={`/user/${user.id}`} >{ user.firstName + ' ' + user.lastName }</Nav.Link>
            //<Nav.Link key={user.id} as={NavLink} exact to={`/user/${user.id}`} className="nav-link">{ user.firstName + ' ' + user.lastName }</Nav.Link>
            )

        })
        return (
            <Container>
                <Nav defaultActiveKey={`/user/${navLinks[0].id}`} className="flex-column">
                    {navLinks}
                </Nav>
            </Container>
        )
    }
}

export default withUserList(UserPage)
