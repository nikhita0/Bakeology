import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './CakeIngredient.module.css';

class BurgerIngredient extends Component {
    render () {
        let ingredient = null;

        switch ( this.props.type ) {
            case ( 'Cake-bottom' ):
                ingredient = <div className={classes.CakeBottom}></div>;
                break;
            case ( 'Cake-top' ):
                ingredient = (
                    <div className={classes.CakeTop}>
                        <div className={classes.Cherry1}></div>
                        <div className={classes.Cherry2}></div>
                    </div>
                );
                break;
            case ( 'Chocolate' ):
                ingredient = <div className={classes.Chocolate}></div>;
                break;
            case ( 'Cream' ):
                ingredient = <div className={classes.Cream}></div>;
                break;
            case ( 'Brownbread' ):
                ingredient = <div className={classes.Brownbread}></div>;
                break;
            case ( 'Creambread' ):
                ingredient = <div className={classes.Creambread}></div>;
                break;
            default:
                ingredient = null;
        }

        return ingredient;
    }
}

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
};

export default BurgerIngredient;