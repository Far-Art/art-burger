import { IngredientsActionType } from "../Action-Types/IngredientsActionType";
import { BurgerAction } from "../Actions/BurgerAction";
import { BurgerAppState } from "../State/BurgerAppState";

export function ingredientsReducer(currentState:BurgerAppState = new BurgerAppState(), action:BurgerAction): BurgerAppState{
    const newState = {...currentState};
        switch(action.type){
            case IngredientsActionType.ADD:
                if(!action.payload){
                    break;
                }
                newState.ingredients.push(action.payload);
                break;
            case IngredientsActionType.REMOVE:
                for( let i = newState.ingredients.length; i >= 0; i--){ 
                    if ( newState.ingredients[i] === action.payload ) { 
                        newState.ingredients.splice(i, 1); 
                        break;
                    }
                }
                break;
            case IngredientsActionType.CLEAR:
                newState.ingredients = [];
                break;
    }
    return newState;
}