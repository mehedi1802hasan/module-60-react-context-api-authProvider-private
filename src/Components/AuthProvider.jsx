import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from './Firebase.config';

export const AuthContext=createContext(null);
const auth=getAuth(app)
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const singIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    //googlePopUp
    const googleLogin=()=>{
       return signInWithPopup(auth,googleProvider)
    }

    //observe auth state change
    useEffect(()=>{
      const unsubscribe=  onAuthStateChanged(auth,currentUser=>{
          console.log('auth state changed',currentUser);
          setUser(currentUser)
          setLoading(false)
        })
       return ()=>{unsubscribe()}
       
      },[])
      const logOut=()=>{
         return signOut(auth)
      }
    const authInfo={
        user,
        createUser,
        singIn,
        logOut,
        loading,
        googleLogin
    }
   // const user={displayName:"mehehi"}
    return (
        <div>
           <AuthContext.Provider value={authInfo}>
            {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;




