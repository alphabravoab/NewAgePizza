import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { switchSelection } from '../actions/currentPizzaIngredient'



  class PizzaIngredient extends PureComponent {
  addIt = ( event ) => {
    event.preventDefault()
    const ingredient = this.state.ingredient
    this.props.switchSelection(ingredient)
  }


    handleChange = ( event ) => {
    const ingredient = event.target.value;
      this.setState({
           ingredient: ingredient
      })
  }
    render() {
      return(
         <div>
           <form onSubmit={ this.addIt }>
               <select onChange = { this.handleChange }>
                 <option value ="">--Pick ingredients -- </option>
                   <option value = "Pineapple">Pineapple</option>
                   <option value = "Corn"> Corn </option>
                   <option value = "Olives(green)"> Olives(green)</option>
                   <option value = "Red union"> Red union </option>
                   <option value = "Spinach"> Spinach </option>
                   <option value = "Cherry tomatoes"> Cherry tomatoes </option>
                   <option value = "Chicken"> Chicken </option>
               </select>
               <input type="submit" value="choose" />
            </form>
         </div>
         )
       }
  }




  const mapStateToProps = state => ({
      ig1: state.ig1
  })

  const mapDispatchToProps = dispatch => ({
    switchSelection: sauce => dispatch(switchSelection(sauce))
  })

  export default connect( mapStateToProps, mapDispatchToProps, ) (PizzaIngredient)
