import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import PizzaBase from './PizzaBase'
import PizzaSauce from './PizzaSauce'
import PizzaIngredient from './PizzaIngredient'
import CurrentPizza from './CurrentPizza'
import './PizzaMaker.css'

  class PizzaMaker extends PureComponent {
    render() {
      return(
         <div className='Pizza'>
           <PizzaBase />
            <PizzaSauce />
            <PizzaIngredient />
            <CurrentPizza />
         </div>
         )
       }
  }
  
  export default connect( null ) (PizzaMaker)
