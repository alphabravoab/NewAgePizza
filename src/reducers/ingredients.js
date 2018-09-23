import { SWITCH_IG, DESELECT_IG } from '../actions/currentPizzaIngredient'

const initialState={
  "Pineapple": false,
  "Corn": false,
  "Olives(green)": false,
  "Red union": false,
  "Spinach": false,
  "Cherry tomatoes": false,
  "Chicken": false,
}

const ingredients = ( state = initialState, {type, payload} ) => {
  switch (type) {
    case SWITCH_IG:
      return {
        ...state,
        [payload.ingredient]: Boolean(1)
      }
    case DESELECT_IG:
      return {
        ...state,
        [payload.ingredient]: Boolean(0)
      }
    default:
      return state 
    }
 
  }

  export default ingredients
 
