import React from 'react'
import { Navigate } from 'react-router-dom'
import {Auth} from './contexto/AuthContext'

export default function PriveteRoute({children}) {
  
const {user}= Auth()
  
    
  
  if(!user) return <Navigate to='/login'/> 
  
    return <>{children}</>
}