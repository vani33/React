import React from "react";
import './Card.css';

//Adv of using card is to eliminate the repititive code in our css files and include them 
//into our custom wrapper components
function Card(props){

    //classNames which are defined with the Card wrapper component will wont work, to make them work
    //this line should be included
    const classes = 'card ' + props.className;
    return <div className={classes}>{props.children}</div>;
}

export default Card;