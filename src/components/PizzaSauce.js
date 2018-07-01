import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { switchSelection } from '../actions/currentPizzaSauce'

const pizzasauce = {
  "Wsauce": {
   type :"White sauce",
   price:0
  },
  "Rsauce":{
    type:'Red sauce',
    price:0
  },
  "DRsauce":{
    type: 'Double red sauce',
    price: 1
  },
  "MixItUP":{
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
                   <option value = "Wsauce"> White sauce </option>
                   <option value = "Rsauce"> Red sauce</option>
                   <option value = "DRsauce"> Double red sauce </option>
                   <option value = "MixItUP"> mix it up </option>
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
