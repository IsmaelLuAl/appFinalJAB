import { useReducer } from "react"
import Context from "./Context"

const valorInicial = {
   logeado: false
}

// Lo que obtiene de los props son todos los hijos de donde lo coloquemos
const Provider = ({ children }) => {
   // Vamos a usar un useReducer para controlar el estado de login y logout
   [auth, dispatch] = useReducer(miReducer, valorInicial)
   return (
      <>
      {/* Los valores que coloquemos en value son los que tiene que tener a disposición de todos en todo momento ej: variables, funciones, etc... */}
         <Context.Provider value={{}}>
            {children}
         </Context.Provider>
      </>
   )
}

export default Provider