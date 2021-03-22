import React, { useState } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
  veggie: 0.5,
  cheese: 0.4,
  meat: 1.3,
  
}

export default function BurgerBuilder() {
  const [ ingredient, setIngredient ] = useState(
    { veggie: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
  )
  const [ totalPrice, setTotalPrice ] = useState({
    totalPrice: 4
  });
  const addIngredientHandler = (type) => {
    const prevCount = ingredient[type];
    const updatedCount = prevCount + 1;
    
    const updatedIngredient = {
      ...ingredient,
      [type]: updatedCount 
    }
    const priceAddition = INGREDIENT_PRICES[type];
    const prevPrice = totalPrice;
    const newPrice = prevPrice + priceAddition;
    setTotalPrice({ totalPrice: newPrice });
    setIngredient({...ingredient,
      [type]: updatedCount  });
  }

  const removeIngredientHandler = (type) => {

  }
    return (
      <Aux>
        <Burger ingredients={ingredient}/>
        <BuildControls 
          ingredientAdded={addIngredientHandler}/>
      </Aux>
    );

}

