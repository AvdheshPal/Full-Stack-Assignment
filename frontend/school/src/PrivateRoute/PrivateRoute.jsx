import React,{useContext} from 'react'
import {Navigate} from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext';


export const PrivateRoute = ({children}) => {
    const {token,setToken} = useContext(AuthContext);
   if(!token){
       return <Navigate to={"/Login"}/>
   }
  return children;
}