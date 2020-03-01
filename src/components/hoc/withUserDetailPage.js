import React from 'react';
import { MyConsumer } from '../MyContext';

const withUserDetailPage = (View) => {
  
    return (props) =>{
        return (
            <MyConsumer>
            {
                (myService) => {
                    return ( <View {...props} getUser={myService.getUserById} getUsers={myService.getUsers}/>)
                }
            }
            </MyConsumer>
        )
    } 
}

export default withUserDetailPage;
