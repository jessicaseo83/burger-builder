import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import './BuildControls.css';

export default function BuildControls(props) {
  const controls = [
    { label: 'Veggie', type: 'veggie' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },

  ];
  const hasIngredients = () => {
    const ingredients = {
      ...props.ingredients
    };
    return Object.values(ingredients).some(amount => amount > 0)
  }

  return (
    <div className="BuildControls">
      <p>Price: <strong>{props.price.toFixed(2)}</strong></p>
      {controls.map(control => (
        <BuildControl 
          key={control.label} 
          label={control.label}
          added={() => props.ingredientAdded(control.type)}
          removed={() => props.ingredientRemoved(control.type)}
          disabled={props.ingredients[control.type] === 0 ? true : false}
        />
      ))}
      <button 
        disabled={!hasIngredients()}
        onClick={props.ordered}
        className="OrderButton">ORDER NOW!
      </button>
    </div>
  )
}