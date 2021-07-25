import { Component } from "react";
import store from "../../../../Redux/Store";
import { IngredientType } from "../../IngredientType";
import "./Calories.css";

interface CaloriesState {
    burgerCalories: number;
}

class Calories extends Component<{},CaloriesState> {

    private CHEESE_CALORIES = 87;
    private PATTY_CALORIES = 295;
    private TOMATO_CALORIES = 15;
    private SALAD_CALORIES = 23;

    public constructor(props:{}){
        super(props);
        this.state = { burgerCalories: 0};
    }

    componentDidMount(){
        this.setState({burgerCalories: this.calcCalories(store.getState().burgerState.ingredients)});
        store.subscribe(() => {
            this.setState({burgerCalories: this.calcCalories(store.getState().burgerState.ingredients)});
        })
    }

    public render(): JSX.Element {
        return (
            <div className="Calories">
                Calories: {this.state.burgerCalories} kcal
            </div>
        );
    }

    calcCalories(ingredients: IngredientType[]):number{
        let calories = 140; // top and bottom bun calories
            ingredients.forEach(element => {
                if(element === IngredientType.CHEESE){
                    calories += this.CHEESE_CALORIES;
                } else if(element === IngredientType.PATTY){
                    calories += this.PATTY_CALORIES;
                } else if(element === IngredientType.TOMATO){
                    calories += this.TOMATO_CALORIES;
                } else if(element === IngredientType.SALAD){
                    calories += this.SALAD_CALORIES;
                }
            });
        return calories;
    }
}

export default Calories;
