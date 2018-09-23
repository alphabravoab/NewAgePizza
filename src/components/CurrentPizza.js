import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import { deleteIngredient }  from '../actions/currentPizzaIngredient'
import IngredientMap from './IngredientMap'
import './Pricetable.css'

  class CurrentPizza extends PureComponent {



    render() {
      const ingredientsforprice =Object.entries(this.props.ingredients).filter((x)=>{if(x[1]===true) return x[0]})
      const price = this.props.base.price && this.props.sauce.price + this.props.base.price + ingredientsforprice.length * 0.5      
      console.log(price )
      return(
         <div className="price">
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
                  { Object.entries(this.props.ingredients).map((ig)=> <IngredientMap ingredient = {ig} />)  }
                  <tr>
                    <td>your price is:</td>
                    <td>
                      { !this.props.base.price && <div> choose a base to start </div> }
                    </td>
                  </tr>
                  <tr>
                    <td> {ingredientsforprice.length>3 && <div> maximum of 3 ingredients per pizza!!</div>}
                      { ingredientsforprice.length<4 &&
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
      ingredients: state.ingredients
  })

  const mapDispatchToProps = dispatch => ({
    deleteIngredient: ig => dispatch(deleteIngredient(ig))
  })

  export default connect( mapStateToProps, mapDispatchToProps, ) (CurrentPizza)
