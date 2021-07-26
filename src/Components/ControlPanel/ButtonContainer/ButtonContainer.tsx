import React from "react";
import { Component } from "react";
import { classicNameResolver } from "typescript";
import { addIngredientAction, removeIngredientAction } from "../../../Redux/Actions/BurgerAction";
import store from "../../../Redux/Store";
import { IngredientType } from "../../BurgerArea/IngredientType";
import "./ButtonContainer.css";

interface Values{
    ingredient:IngredientType;
    icon:string;
}

function ButtonContainer(props:Values): JSX.Element {
    store.subscribe(()=>{});
    return (
        <div className="ButtonContainer">
			<button 
                id={("remove-" + props.ingredient)} 
                className={removeIngredient(props.ingredient)}
                // className="control-btn left-btn"
                onClick={() => removeIngredient(props.ingredient)}
                >
                -
            </button>
            <div id="text-area">
                <img src={props.icon} alt="ingredient-icon"/>
                {props.ingredient}
            </div>
            <button 
                id={("add-" + props.ingredient)} 
                className="control-btn right-btn"
                onClick={() => addIngredient(props.ingredient)}
                >
                +
            </button>
        </div>
    );
}

function addIngredient(ingredient: IngredientType){
    
    const classes = "control-btn right-btn";
    let ingredientCount = store.getState().burgerState.ingredients.filter(item => item === ingredient);
    // if(ingredientCount.length === 0){
    //     return classes + " disabled";
    // }
    store.dispatch(addIngredientAction(ingredient));
    // return classes + " enabled";
}

function removeIngredient(ingredient: IngredientType){
    const classes = "control-btn left-btn";
    let ingredientCount = store.getState().burgerState.ingredients.filter(item => item === ingredient);
    if(ingredientCount.length === 0){
        // return classes + " disabled";
    }
    store.dispatch(removeIngredientAction(ingredient));
    return classes + " enabled";
}

export default ButtonContainer;
