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
    </div>
  )
}