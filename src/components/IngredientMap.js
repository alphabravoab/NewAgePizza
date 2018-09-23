import React, { PureComponent } from 'react'

import { connect } from 'react-redux'

class IngredientMap extends PureComponent {

  render() {
    
    return (
      <div>
      {this.props.ingredient[1]===true&& <tr key={ this.props.ingredient }>
      <td>{ this.props.ingredient } </td>
      <td>  0,50</td>
     
    </tr>
}
</div>
          )
  }
}


export default connect() ( IngredientMap )
