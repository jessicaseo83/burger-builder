import React, { useState } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';

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
        <div>Build Controls</div>
      </Aux>
    );

}

