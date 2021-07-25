import React from "react";
import { Component } from "react";
import { addIngredientAction, removeIngredientAction } from "../../../Redux/Actions/BurgerAction";
import store from "../../../Redux/Store";
import { IngredientType } from "../../BurgerArea/IngredientType";
import "./ButtonContainer.css";

interface Values{
    ingredient:IngredientType;
    icon:string;
}

function ButtonContainer(props:Values): JSX.Element {
    return (
        <div className="ButtonContainer">
			<button 
                id={("remove-" + props.ingredient)} 
                className="control-btn left-btn"
                onClick={() => removeIngredient(props.ingredient)}
                >
                -
            </button>
            <div id="icon-area">
                <img src={props.icon} alt="ingredient-icon"/>
            </div>
            <div id="text-area">
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
    store.dispatch(addIngredientAction(ingredient));
}

function removeIngredient(ingredient: IngredientType){
    store.dispatch(removeIngredientAction(ingredient));
}

export default ButtonContainer;
