import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';


const Gor = () => {
    const {user}=useContext(AuthContext);
   console.log(user)
    return (
        <div>
            <h3>The Name Of AuthContext is {user && <span>{user.displayName}</span> }</h3>
        </div>
    );
};

export default Gor;