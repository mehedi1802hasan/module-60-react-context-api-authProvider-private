import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
const Registration = () => {
  const {user,createUser}=useContext(AuthContext)
  const handleRegistration = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);
    createUser(email,password)
    .then(result=>{
      const signUpUser=result.user
      console.log(signUpUser)
      
    })
    .catch(error=>{
      console.log(error.message)
    })
  };


  return (
    <div className="min-h-screen hero bg-base-200">
      <div className="flex-col hero-content lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Please registration!!</h1>
        </div>
        <div className="flex-shrink-0 w-full max-w-sm shadow-2xl card bg-base-100">
          <form onSubmit={handleRegistration} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <div className="mt-6 form-control">
              <button className="btn btn-primary">Register</button>
            </div>
            <Link to="/login">
              <button className="btn btn-link">
                Have you already account ?
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
