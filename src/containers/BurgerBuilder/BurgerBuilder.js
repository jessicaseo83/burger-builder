import React, { useState } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

export default function BurgerBuilder() {
  const [ ingredient, setIngredient ] = useState(
    { vaggie: 0,
      bacon: 1,
      cheese: 2,
      meat: 1
    }
  )
    return (
      <Aux>
        <Burger ingredients={ingredient}/>
        <BuildControls />
      </Aux>
    );

}

