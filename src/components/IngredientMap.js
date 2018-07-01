import React, { PureComponent } from 'react'
import { bindActionCreators } from 'redux'
import { deleteIngredient }  from '../actions/currentPizzaIngredient'
import { connect } from 'react-redux'

class IngredientMap extends PureComponent {

  handleClick = (ig) => {
      this.props.deleteIngredient(this.props.ingredient)
    }

  render() {
    return (
      <tr key={ this.props.ingredient }>
        <td>{ this.props.ingredient }</td>
        <td>0,50</td>
        <td>   <button className="button" onClick={ this.handleClick }> X </button></td>
      </tr>
    )
  }
}
const mapDispatchToProps = dispatch => ({
  deleteIngredient: ig => dispatch(deleteIngredient(ig))
})

export default connect( null, mapDispatchToProps, ) ( IngredientMap )
