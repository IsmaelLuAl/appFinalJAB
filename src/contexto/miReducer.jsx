import types from './types'

const miReducer = (state, action) => {

   switch ( action.type ){
      case types.login:
         return state

      case types.logout:
         return state

      default:
         return state
   }
}

export default miReducer