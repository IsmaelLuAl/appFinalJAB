import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

   const navegacion = useNavigate()
   const login = () => {
      navegacion('/', {replace: true})
   }
   return (
      <>
         <div>Login</div>
         <button onClick={login}>Login</button>
      </>
      
   )
}

export default Login