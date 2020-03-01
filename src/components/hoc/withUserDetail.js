import React from 'react';
import { MyConsumer } from '../MyContext';

const withUserDetail = (View) => {
  
    return (props) =>{
        return (
            <MyConsumer>
            {
                (myService) => {
                    return ( <View {...props} getUser={myService.getUserById}/>)
                }
            }
            </MyConsumer>
        )
    }
    
}

export default withUserDetail;