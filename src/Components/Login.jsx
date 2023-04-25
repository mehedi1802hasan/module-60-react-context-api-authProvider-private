import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './AuthProvider';
const Login = () => {
  const {singIn,googleLogin}=useContext(AuthContext)
    const handleLogin=event=>{
        event.preventDefault()
       // const form=event.target;
        const email=event.target.email.value;
        const password=event.target.password.value;
        console.log(email,password);
      singIn(email,password)
        .then(result=>{
          const singgedUser=result.user;
         reset();
        })
        .catch(error=>{
          console.log(error.message)
        })
    }
    const handleGooglePopUp=()=>{
      googleLogin()
      .then(result=>{
        const loggedUser=result.user;
        console.log(loggedUser)
      })
      .catch(error=>{
        console.log(error.message)
      })
    }
    return (
   
           <div className="min-h-screen hero bg-base-200">
  <div className="flex-col hero-content lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Please Login!!</h1>
    
    </div>
    <div className="flex-shrink-0 w-full max-w-sm shadow-2xl card bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email"name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="mt-6 form-control">
          <button className="btn btn-primary">Login</button>
        </div>
        <Link to='/registration'><button className="btn btn-link"> are you ? </button></Link>
      </form>
      <button onClick={handleGooglePopUp} className='btn btn-primary'>Google Login</button>
    </div>
   
  </div>
  
</div>

    );
};

export default Login;