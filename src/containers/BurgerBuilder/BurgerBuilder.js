import React, { useState } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';


const INGREDIENT_PRICES = {
  veggie: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.3
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
    finalPrice: 4
  });

  const [ purchasing, setPurchasing ] = useState(false);

  const addIngredientHandler = (type) => {
    const prevCount = ingredient[type];
    const updatedCount = prevCount + 1;

    const priceAddition = INGREDIENT_PRICES[type];
    const prevPrice = totalPrice.finalPrice;
    const newPrice = prevPrice + priceAddition;
    setTotalPrice({ ...totalPrice, finalPrice : newPrice });
    setIngredient({...ingredient,
      [type]: updatedCount  });
  }

  const removeIngredientHandler = (type) => {
    const prevCount = ingredient[type];
    if (prevCount <= 0) {
      return;
    }
    const updatedCount = prevCount - 1;
    const priceDeduction = INGREDIENT_PRICES[type];
    const prevPrice = totalPrice.finalPrice;
    const newPrice = prevPrice - priceDeduction;
    setTotalPrice({ ...totalPrice, finalPrice: newPrice });
    setIngredient({...ingredient,
      [type]: updatedCount  });
  }
 
  
  const purchaseHandler = () => {
    setPurchasing(true); 
  }

  const purchaseCancelHandler = () => {
    setPurchasing(false);
  }

    return ( 
      <Aux>
        <Modal show={purchasing} modalClosed={purchaseCancelHandler}>
          <OrderSummary ingredients={ingredient}/>
        </Modal>
        <Burger ingredients={ingredient}/>
        <BuildControls 
          ingredientAdded={addIngredientHandler}
          ingredientRemoved={removeIngredientHandler}
          ingredients={ingredient}
          price={totalPrice.finalPrice}
          ordered={purchaseHandler}/>
      </Aux>
    );

}

