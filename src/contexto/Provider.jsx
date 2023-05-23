import { useReducer } from "react"
import Context from "./Context"
import miReducer from "./miReducer"
import types from "./types"

// Lo que obtiene de los props son todos los hijos de donde lo coloquemos
const Provider = ({ children }) => {

   const valorInicial = {
      logeado: false
   }

   const logearse = (user) => {
      const action = {
         type: types.login,
         payload: user
      }
      dispatch(action)
   }

   const deslogearse = () => {
      const action = {
         type: types.logout,
         payload: null
      }
      dispatch(action)
   }

   // Vamos a usar un useReducer para controlar el estado de login y logout
   const [auth, dispatch] = useReducer(miReducer, valorInicial)
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