import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { switchSelection } from '../actions/currentPizzaBase'

const pizzabase = {
  "normal": {
   size :"25cm NY Style",
   price:11.49
  },
  "large":{
    size:'30cm NY Style',
    price:11.49
  },
  "extralarge":{
    size: '35cm NY Style',
    price: 13.49
  },
  "small":{
    size:  '20cm NY Style',
    price: 6.45
  }
}

  class PizzaBase extends PureComponent {
  addIt = ( event ) => {
    console.log(this.state)
    event.preventDefault()
    const base = this.state.base
    this.props.switchSelection(base)
  }


    handleChange = ( event ) => {
    const base = event.target.value;
    const currentPizzabase = pizzabase[base];
  console.log(pizzabase[base])
      this.setState({
         base: {
           size : currentPizzabase.size,
           price: currentPizzabase.price
         }
      })
  }
    render() {
      return(
         <div>
           <form onSubmit={ this.addIt }>
               <select onChange = { this.handleChange }>
                   <option value = "normal"> 25cm NY Style </option>
                   <option value = "large"> 30cm NY Style</option>
                   <option value = "extralarge"> 35cm NY Style </option>
                   <option value = "small"> 25cm NY Style </option>
               </select>
               <input type="submit" value="choose" />
            </form>
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
