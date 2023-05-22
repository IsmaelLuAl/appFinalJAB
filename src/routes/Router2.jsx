import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import CP from '../paginas/CP'
import NO from '../paginas/NO'
import NavBar from '../navbar/NavBar'

const Router2 = () => {
   return (
      <>
         {/* Aquí tenemos la barra de navegación principal donde se encuentran los enlaces que te redirigen a las páginas */}
         <NavBar/>
         <Routes>
            <Route path='cp' element={<CP/>}/>
            <Route path='no' element={<NO/>}/>
            <Route path='/' element={<Navigate to='cp'/>}/>
         </Routes>
      </>
   )
}

export default Router2