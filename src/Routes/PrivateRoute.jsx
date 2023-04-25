import React, { useContext } from 'react';
import { AuthContext } from '../Components/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
     
    if(loading){
        return <progress className="w-56 progress progress-warning" value="70" max="100"></progress>
    }
    if(user){
    return children
  }

    return <Navigate to="/login"></Navigate> 
    ;
};

export default PrivateRoute;