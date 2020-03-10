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
        const { receveUserId, match:{userId} } = this.props;
        const users = this.props.getUsers();
        const firstId = userId; //users[2].id;
        
        this.setState({ users, selectedItemId: firstId });

        receveUserId(firstId);
     }

     selectItem = (selectedItemId) => {
         
        this.props.receveUserId(selectedItemId)
        this.setState({selectedItemId});
        
     }

    render() {
        const { users } = this.state;
        const { location:{pathname} } = this.props;
 
        if(!users) {
            return <Loading/>
        }        

        const navLinks = users.map(user => {
            return ( 
                <Link
                    key={user.id} 
                    to={`/user/${user.id}`}
                    onClick={ () => this.selectItem(user.id) }
                    className={`nav-link  ${this.state.selectedItemId === user.id ? 'selected' : ''}`}> 
                        { user.firstName + ' ' + user.lastName }
                </Link>   
            );
        })
        return (
            <Container>
                <Nav   className="flex-column">  {/*activeKey={pathname} */}
                    {navLinks}
                </Nav>                   
            </Container>
        );
    }
}

export default withRouter(withUserList(UserPage))
