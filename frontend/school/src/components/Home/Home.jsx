import React ,{useContext,useEffect}from 'react'
import {Login} from '../Login/Login'
import {Main} from '../Main/Main'
import {Classes} from '../Classes/Classes'
import {AuthContext} from '../../Context/AuthContext'
import {Link} from 'react-router-dom'
import {Navigate} from 'react-router-dom'

function Home() {
  const {token , setToken} = useContext(AuthContext)
  
  
  return (
    <>
   <Main/>
    </>
  )
}

export {Home}