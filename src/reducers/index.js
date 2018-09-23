import { combineReducers } from 'redux'
import base from './base'
import sauce from './sauce'
import ingredients from './ingredients'

export default combineReducers({
  base,
  sauce,
  ingredients
})
