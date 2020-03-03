import React, { Component } from 'react';
import { Nav, Container} from 'react-bootstrap';
import { withRouter, Link } from 'react-router-dom';
import './UserPage.css';
import { withUserList } from '../../hoc';
import Loading from '../../Loading';

 class UserPage extends Component {
     state = {
         users: null,
         selectedItemId: null
     }

     componentDidMount() {
        const { receveFirstUserId } = this.props;
        const users = this.props.getUsers();
        const firstId = users[0].id;
        
        this.setState({ users });
        this.setState({ selectedItemId: firstId });
        
        
        
        receveFirstUserId(firstId);
     }
     selectItem = (selectedItemId) => {
         
         
         this.setState({selectedItemId});
         console.log(this.state.selectedItemId);
     }

    render() {
        const { users } = this.state;
        const { location:{pathname} } = this.props;
 
        if(!users) {
            return <Loading/>
        }
        console.log(this.state.selectedItemId);
        

        const navLinks = users.map(user => {
            return ( 
                <Link   
                    key={user.id} 
                    to={`/user/${user.id}`}
                    onClick={() => this.selectItem(user.id)}
                    className={`nav-link  ${this.state.selectedItemId === user.id ? 'selected' : ''}`}> 
                        { user.firstName + ' ' + user.lastName }
                </Link>   
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
