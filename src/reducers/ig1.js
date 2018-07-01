import { SWITCH_IG1, DELETE_IG } from '../actions/currentPizzaIngredient'

const base = ( state = [], action ) => {
  switch (action.type) {
    case 'SWITCH_IG1':
      return  [...state, action.payload]
    case 'DELETE_IG' :
      return state.filter((item) => item !== action.payload  )
    default:
      return state
  }
}

export default base
