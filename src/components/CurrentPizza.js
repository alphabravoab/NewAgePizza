import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { deleteIngredient }  from '../actions/currentPizzaIngredient'
import IngredientMap from './IngredientMap'
import './Pricetable.css'

  class PizzaMaker extends PureComponent {
    handleClick = (ig) => {
        console.log(ig)
    		this.props.deleteIngredient(ig)
    	}


    render() {
      const price = this.props.base.price && this.props.sauce.price + this.props.base.price  + this.props.ig1.length * 0.5

      return(
         <div>
           Current Pizza exists of:
              <tbody className= 'pricetable'>
                <tr>
                  <td> { this.props.base.size } </td>
                  <td> { this.props.base.price } </td>

                </tr>
                <tr>
                  <td>{ this.props.sauce.type }</td>
                { this.props.sauce.type &&  <td>{ this.props.sauce.price }</td> }
                </tr>
                  { this.props.ig1.map((ig)=> <IngredientMap ingredient = {ig} />)  }
                  <tr>
                    <td>your price is:</td>
                    <td>
                      { !this.props.base.price && <div> choose a base to start </div> }
                    </td>
                  </tr>
                  <tr>
                    <td> {this.props.ig1.length>3 && <div> maximum of 3 ingredients per pizza!!</div>}
                      { this.props.ig1.length<4 &&
                          <div> {this.props.base.price &&
                            <div>  normal delivery:   { price } <br />
                               TurboDrone:   { Math.round(100 * 1.1 *( price ))/100 } </div>}</div>}

                   </td>
                  </tr>
              </tbody>

         </div>
         )
       }
  }

  const mapStateToProps = state => ({
      base: state.base,
      sauce: state.sauce,
      ig1: state.ig1
  })

  const mapDispatchToProps = dispatch => ({
    deleteIngredient: ig => dispatch(deleteIngredient(ig))
  })

  export default connect( mapStateToProps, mapDispatchToProps, ) (PizzaMaker)
