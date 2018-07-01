import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { switchSelection } from '../actions/currentPizzaSauce'

const pizzasauce = {
  "White sauce": {
   type :"White sauce",
   price:0
  },
  "Red sauce":{
    type:'Red sauce',
    price:0
  },
  "Double red sauce":{
    type: 'Double red sauce',
    price: 1
  },
  "Mix it up":{
    type:  'Mix it up',
    price: 1.5
  }
}


  class PizzaSauce extends PureComponent {
  addIt = ( event ) => {
    console.log(this.state.sauce)
    event.preventDefault()
    const sauce = this.state.sauce
    this.props.switchSelection(sauce)
  }


    handleChange = ( event ) => {
    const sauce = event.target.value;
    const currentPizzasauce = pizzasauce[sauce];
      this.setState({
         sauce: {
           type : currentPizzasauce.type,
           price: currentPizzasauce.price
         }
      })
  }
    render() {
      return(
         <div>

           <form onSubmit={ this.addIt }>
               <select onChange = { this.handleChange }>
                  <option value ="">--Pick a sauce -- </option>
                  { Object.keys(pizzasauce).map((sauce)=> <option value ={ sauce }> { sauce }</option> ) }
               </select>
               <input type="submit" value="choose" />
            </form>
         </div>
         )
       }
  }

  const mapStateToProps = state => ({
      currentPizzasauce: state.sauce
  })

  const mapDispatchToProps = dispatch => ({
    switchSelection: sauce => dispatch(switchSelection(sauce))
  })

  export default connect( mapStateToProps, mapDispatchToProps, ) (PizzaSauce)
