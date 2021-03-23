import React from 'react';
import './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient.js'

export default function Burger(props) {
  let transformedIngredients = Object.keys(props.ingredients).map(igKey => {
    return [...Array(props.ingredients[igKey])].map((_, i) => {
      return <BurgerIngredient key={igKey + i} type={igKey} />
    })
  })
  .reduce((arr, elem) => {
    return arr.concat(elem)
  }, []);  //flatten an array of arrays using Array.reduce => Make an array of Ingredients Sum.

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please add ingredients!</p>
  }
 

  return (
    <div className="Burger">
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />

    </div>
  );
};


