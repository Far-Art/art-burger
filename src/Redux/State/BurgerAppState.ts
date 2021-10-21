import { IngredientType } from "../../Components/BurgerArea/IngredientType";

export class BurgerAppState {
    ingredients: IngredientType[] = [];
    amount = { cheese: 0, patty: 0, salad: 0, tomato: 0 };
}