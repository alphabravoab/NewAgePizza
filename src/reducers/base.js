import { SWITCH_BASE } from '../actions/currentPizzaBase'

const base = ( state = {}, action ) => {
  switch (action.type) {
    case 'SWITCH_BASE':
      return  action.payload
    default:
      return state
  }
}

export default base
