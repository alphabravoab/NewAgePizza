import { SWITCH_SAUCE } from '../actions/currentPizzaSauce'

const sauce = ( state = initialstate, action ) => {
  switch (action.type) {
    case SWITCH_SAUCE:
      return  action.payload
    default:
      return state
  }
}

const initialstate =
{
  type:null,
  price:0
}

export default sauce
