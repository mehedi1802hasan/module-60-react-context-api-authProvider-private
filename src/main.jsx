import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Components/Main/Main';
import Login from './Components/Login';
import Registration from './Components/Registration';
import Home from './Components/Main/Home';
import AuthProvider from './Components/AuthProvider';
import Gor from './Components/Gor';
import Order from './Components/Order';
import Profile from './Components/Profile';
import PrivateRoute from './Routes/PrivateRoute';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
    
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:"/registration",
        element:<Registration></Registration>
      },
      {
        path:'/gor',
        element:<Gor></Gor>
      },
      {
        path:'/order',
        element:<PrivateRoute><Order></Order></PrivateRoute>
      },
      {
        path:'/profile',
        element:<PrivateRoute><Profile></Profile></PrivateRoute>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider>
      <RouterProvider router={router} />
      </AuthProvider>
  </React.StrictMode>,
)
