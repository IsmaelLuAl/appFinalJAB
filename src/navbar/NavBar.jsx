import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Context from '../contexto/Context'

const NavBar = () => {

   const deslogearse = useContext(Context)
   const navegacion = useNavigate()
   const logout = () => {
      deslogearse()
      navegacion('/login', {replace:true})
   }

   return (
      <>
         <nav>
            <div>
               <NavLink to = '/cp'>Capital y Patagonia</NavLink>
               <NavLink to = '/no'>Norte y Este</NavLink>
               <NavLink to = '/login'>Login</NavLink>
            </div>
            <button onClick={logout}>Logout</button>
         </nav>
      </>
   )
}

export default NavBar