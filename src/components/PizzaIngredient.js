import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { switchSelection, deleteIngredient } from '../actions/currentPizzaIngredient'



  class PizzaIngredient extends PureComponent {
    state = {}

    handleChange = (event) => {
        const {name, value} = event.target
    
        this.setState({
          [name]: value
        })
      }
    
    checkItem(name, e) {
        if (!e.target.checked)
          return this.props.deleteIngredient(name);
    
        this.props.switchSelection(name);  
      }

    render() {
      return(
         <div>
           	<form onSubmit={this.handleSubmit}>
           {this.props.ingredients&&Object.keys(this.props.ingredients).map((ingredient)=><div><input name={ingredient} type="checkbox" onChange={e => this.checkItem({ingredient}, e)}/> {ingredient}</div>)}
           </form>
         </div>
         )
       }
  }




  const mapStateToProps = state => ({
      ingredients: state.ingredients
  })

  function mapDispatchToProps(dispatch) {
    return bindActionCreators(
      { switchSelection, deleteIngredient },
      dispatch
    );
  }
  export default connect( mapStateToProps, mapDispatchToProps, ) (PizzaIngredient)
