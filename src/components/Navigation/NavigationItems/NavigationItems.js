import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
       
        <NavigationItem link="/" active>CakeMaker</NavigationItem>
        <NavigationItem link="/orders">PlaceOrder</NavigationItem>
    </ul>
);

export default navigationItems;