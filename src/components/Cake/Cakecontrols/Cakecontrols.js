import React from 'react';

import classes from './Cakecontrols.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Cream', type: 'Cream' },
    { label: 'Brownbread', type: 'Brownbread' },
    { label: 'Creambread', type: 'Creambread' },
    { label: 'Chocolate', type: 'Chocolate' },
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <h1 ><strong>Current Price: {props.price.toFixed(2)}</strong></h1>
        {controls.map(ctrl => (
            <BuildControl 
                key={ctrl.label} 
                label={ctrl.label}
                added={() => props.ingredientAdded(ctrl.type)}
                removed={() => props.ingredientRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]} />
        ))}
        <button 
            className={classes.OrderButton}
            disabled={!props.purchasable}
            onClick={props.ordered}>ORDER NOW</button>
    </div>
);

export default buildControls;