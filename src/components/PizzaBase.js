import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
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
    const base = this.state.base
    this.props.switchSelection(base)
  }


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
    render() {
      return(
         <div>
           <form onSubmit={ this.addIt }>
               <select onChange = { this.handleChange }>
                 {Object.keys(pizzabase).map((base)=> <option value ={ base }> { base } </option> )}
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
