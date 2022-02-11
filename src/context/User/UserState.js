import React, {  useEffect, useState } from 'react';
import {useAuth0} from '@auth0/auth0-react'
import UserContext from './userContext'

 const UserState = ({children}) => {
     const {loginWithRedirect, logout, user}=useAuth0()
     const [myUser,setMyuser]=useState(null);

     useEffect(()=>{
        setMyuser(user)
     },[user])
     return (  
        <UserContext.Provider value={{ loginWithRedirect, logout, myUser }}>
                {children}
        </UserContext.Provider>
     );
 }
  
 export default UserState;

