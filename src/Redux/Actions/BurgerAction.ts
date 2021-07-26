import { IngredientType } from "../../Components/BurgerArea/IngredientType";
import { IngredientsActionType } from "../Action-Types/IngredientsActionType";

export interface BurgerAction {
    type:IngredientsActionType
    payload?: IngredientType
}

export function addIngredientAction(ingredient: IngredientType): BurgerAction {
    return {type: IngredientsActionType.ADD, payload:ingredient};
}

export function removeIngredientAction(ingredient: IngredientType): BurgerAction {
    return {type: IngredientsActionType.REMOVE, payload:ingredient};
}

export function clearIngredientsAction(): BurgerAction {
    return {type: IngredientsActionType.CLEAR};
}