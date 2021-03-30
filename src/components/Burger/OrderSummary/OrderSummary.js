import React from 'react';
import Aux from '../../../hoc/Aux'

export default function OrderSummary(props) {
  const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
          return <li key={igKey}><span stype={{textTransform: 'caplitalize'}}>{igKey}</span>: {props.ingredients[igKey]}</li>
        });

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>An awesome burger with the following ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p>Continue to Checkout</p>
    </Aux>
  )
}