import React, { Component } from 'react';
import { withUserDetail } from '../hoc';
import { withRouter } from 'react-router-dom';
import Loading from '../Loading';
import UserDetailPage from '../pages/UserDetailPage';
import { Button, Container} from 'react-bootstrap';


class UserDetail extends Component {
    state={
        user: null,
        iSUserMoreDetail: false
    }
  
    componentDidMount() {
        const { getUser, match:{params:{userId}}} = this.props;

        const user = getUser(userId);
       
        this.setState({user})
    }

    showUserMoreDetail = () => {
        this.setState({iSUserMoreDetail: true})

    }

    render() {
        const { user, iSUserMoreDetail } = this.state;

        if(!user) return <Loading />
        
        return (
            <Content user={user} iSUserMoreDetail={iSUserMoreDetail} showUserMoreDetail={this.showUserMoreDetail} />
        )
    }
}

const Content = (props) => {
    const { user, iSUserMoreDetail, showUserMoreDetail } = props;
    if(iSUserMoreDetail) {
        return <UserDetailPage />
    }

    return (
        <Container>
            <h1>{user.firstName + ' ' + user.lastName}</h1>
            <img style={{width: '300px'}} src={'/' + user.profileImage} alt={user.lastName + ' ' + user.lastName}/>
        
            <div><Button onClick={showUserMoreDetail}>View</Button></div>
        </Container>
        
    )
}

export default withUserDetail(withRouter(UserDetail));
