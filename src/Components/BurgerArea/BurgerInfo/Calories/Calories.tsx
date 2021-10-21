import { Component } from "react";
import AppLogic from "../../../../AppLogic/AppLogic";
import store from "../../../../Redux/Store";
import { IngredientType } from "../../IngredientType";
import "./Calories.css";

interface CaloriesState {
    burgerCalories: number;
}

export default class Calories extends Component<{}, CaloriesState> {

    public constructor(props: {}) {
        super(props);
        this.state = { burgerCalories: 0 };
    }

    componentDidMount() {
        this.setState({ burgerCalories: this.calcCalories(store.getState().burgerAppState.ingredients) });
        store.subscribe(() => {
            this.setState({ burgerCalories: this.calcCalories(store.getState().burgerAppState.ingredients) });
        })
    }

    public render(): JSX.Element {
        return (
            <div className="Calories InfoClass">
                calories: {this.state.burgerCalories} kcal
            </div>
        );
    }

    calcCalories(ingredients: IngredientType[]): number {
        let calories = AppLogic.ingredients.topBun.calories + AppLogic.ingredients.bottomBun.calories;
        ingredients.forEach(element => {
            if (element === IngredientType.CHEESE) {
                calories += AppLogic.ingredients.cheese.calories;
            } else if (element === IngredientType.PATTY) {
                calories += AppLogic.ingredients.patty.calories;
            } else if (element === IngredientType.TOMATO) {
                calories += AppLogic.ingredients.tomato.calories;
            } else if (element === IngredientType.SALAD) {
                calories += AppLogic.ingredients.salad.calories;
            }
        });
        return calories;
    }
}