import React from 'react';
import { MyConsumer } from '../MyContext';

const withUserList = (View) => {
  
    return (props) =>{
        return (
            <MyConsumer>
            {
                (myService) => {
                    return ( <View {...props} getUsers={myService.getUsers}/>)
                }
            }
            </MyConsumer>
        )
    }
    
}

export default withUserList;