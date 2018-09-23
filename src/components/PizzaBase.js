import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import { switchSelection } from '../actions/currentPizzaBase'

const pizzabase = {
  "25cm NY Style": {
   size :"25cm NY Style",
   price:11.49
  },
  "30cm NY Style":{
    size:'30cm NY Style',
    price:11.49
  },
  "35cm NY Style":{
    size: '35cm NY Style',
    price: 13.49
  },
  "20cm NY Style":{
    size:  '20cm NY Style',
    price: 6.45
  }
}

  class PizzaBase extends PureComponent {
  addIt = ( event ) => {
    event.preventDefault()
    if (!this.state.base){
      console.log("no base")
    }
    else{
    const base = this.state.base
    this.props.switchSelection(base)
 } }


    handleChange = ( event ) => {
    const base = event.target.value;
    const currentPizzabase = pizzabase[base];
    this.setState({
         base: {
           size : currentPizzabase.size,
           price: currentPizzabase.price
         }
      })
  }

  changeButton =(e)=>{
    console.log(e.target.value)
    const base = e.target.value
    const currentPizzabase = pizzabase[base];
    this.props.switchSelection(currentPizzabase)
  }
    render() {
      return(
         <div>

<div onChange= { this.changeButton.bind(this) }>   
             {Object.keys(pizzabase).map((base)=><div> <input name="bodem" type="radio" value ={ base }/> { base } </div> )}
</div>

 
         </div>
         )
       }
  }

  const mapStateToProps = state => ({
      base: state.base
  })

  const mapDispatchToProps = dispatch => ({
    switchSelection: base => dispatch(switchSelection(base))
  })

  export default connect( mapStateToProps, mapDispatchToProps, ) (PizzaBase)
