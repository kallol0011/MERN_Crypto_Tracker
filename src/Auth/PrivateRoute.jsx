import React from 'react';
import { Navigate } from "react-router-dom";
const PrivateRoute = ({children}) => {

    const loginDone=localStorage.getItem("token")
    console.log("loginDone",loginDone)
    if(loginDone)
   {
    return children
    
   }
   else
   {
     return <Navigate to={"/newuser"} />
   }
   


    
};

export default PrivateRoute;