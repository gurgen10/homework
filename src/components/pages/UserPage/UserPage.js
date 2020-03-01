import React, { Component } from 'react';
import { Nav, Container} from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import './UserPage.css';
import { withUserList } from '../../hoc';
import Loading from '../../Loading';

 class UserPage extends Component {
     state = {
         users: null,
         activeUserId: null
     }

     componentDidMount() {
        const { receveFirstUserId } = this.props;
        const users = this.props.getUsers();
        const firstId = users[0].id;
        
        this.setState({ users });
        
        receveFirstUserId(firstId);
     }

    render() {
        const { users } = this.state;
        const { location:{pathname} } = this.props;
 
        if(!users) {
            return <Loading/>
        }

        const navLinks = users.map(user => {
            
            return ( 
                <Nav.Link   
                    key={user.id} 
                    href={`/user/${user.id}`}
                    className='nav-link '> 
                        { user.firstName + ' ' + user.lastName }
                </Nav.Link>   
            );
        })
        return (
            <Container>
                <Nav activeKey={pathname}  className="flex-column">
                    {navLinks}
                </Nav>                   
            </Container>
        );
    }
}

export default withRouter(withUserList(UserPage))
