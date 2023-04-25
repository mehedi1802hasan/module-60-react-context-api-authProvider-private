import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider';
const Main = () => {
  
  const {user,logOut}=useContext(AuthContext)
  const handleLogout=()=>{
    logOut()
    .then(()=>{})
    .catch(error=>{
      console.log(error.message)
    })
  }
  return (
        <div className="bg-yellow-500 navbar">
 
    <div><h3 className="text-xl normal-case btn btn-ghost">Firebase Hunter</h3></div>
 
 
    
   
    <ul className='gap-5 mx-10'>
   <li> <Link to='/gor'>Gor</Link> </li>
   <li> <Link to='/order'>Order</Link>   </li>
   {
    user && <li> <Link to='/profile'>Profile</Link>   </li>
   }
   <li>  <Link to='/login'>Login</Link> </li>
   <li>   <Link to='/registration'>Registration</Link></li>
    </ul>
    
        <div className='mx-20'>
          {
            user ?
          <div>
             <span>{user.email}</span> 
             <button onClick={handleLogout} className="btn">signOUt</button>
          </div>
                 :
             <span> <Link to="/login">signIn</Link></span>
          }
        </div>
     
      </div>
     
   
    
 

    );
};

export default Main;