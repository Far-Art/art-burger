import { BurgerAction, IngredientsActionType } from "../Actions/BurgerAction";
import { BurgerAppState } from "../State/BurgerAppState";

export function ingredientsReducer(currentState: BurgerAppState = new BurgerAppState(), action: BurgerAction): BurgerAppState {
    const newState = { ...currentState };
    switch (action.type) {
        case IngredientsActionType.ADD:
            if (!action.payload) {
                break;
            }
            newState.ingredients.push(action.payload);
            newState.amount[action.payload]++;
            break;
        case IngredientsActionType.REMOVE:
            for (let i = newState.ingredients.length; i >= 0; i--) {
                if (newState.ingredients[i] === action.payload) {
                    newState.ingredients.splice(i, 1);
                    break;
                }
            }
            if (action.payload) {
                newState.amount[action.payload]--;
            }
            break;
        case IngredientsActionType.CLEAR:
            newState.ingredients = [];
            newState.amount = { cheese: 0, patty: 0, salad: 0, tomato: 0 }
            break;
    }
    return newState;
}