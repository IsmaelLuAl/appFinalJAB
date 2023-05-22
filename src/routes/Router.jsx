import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../paginas/Login'
import Router2 from './Router2'

//Este es el router principal de la aplicación desde el que se accede a todos los demás
const Router = () => {
   return (
      <>
         <Routes>
            <Route path='login' element={<Login/>}/>
            {/* Importante poner el '*' o sino no encontrará las rutas que especifiquemos en el resto de routers */}
            {/* El router 2 es donde se encuentran el resto de elementos de la app */}
            <Route path='/*' element={<Router2/>}/>
         </Routes>
      </>
   )
}

export default Router