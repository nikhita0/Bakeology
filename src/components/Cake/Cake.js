import React from 'react';

import classes from './Cake.module.css';
import CakeIngredient from './CakeIngredient/CakeIngredient';

const Cake = ( props ) => {
    let transformedIngredients = Object.keys( props.ingredients )
        .map( igKey => {
            return [...Array( props.ingredients[igKey] )].map( ( _, i ) => {
                return <CakeIngredient key={igKey + i} type={igKey} />;
            } );
        } )
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>;
    }
    return (
        <div className={classes.Cake}>
            <CakeIngredient type="Cake-top" />
            {transformedIngredients}
            <CakeIngredient type="Cake-bottom" />
        </div>
    );
};

export default Cake;