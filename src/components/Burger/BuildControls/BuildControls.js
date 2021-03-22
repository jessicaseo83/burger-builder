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
      {controls.map(control => (
        <BuildControl 
          key={control.label} 
          label={control.label}
          added={() => props.ingredientAdded(control.type)}
        />
      ))}
    </div>
  )
}