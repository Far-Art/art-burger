import { Component } from "react";
import "./Price.css";
import store from "../../../../Redux/Store";
import { IngredientType } from "../../IngredientType";
import AppLogic from "../../../../AppLogic/AppLogic";

interface PriceState {
    burgerPrice: number;
}

export default class Price extends Component<{}, PriceState> {

    public constructor(props: {}) {
        super(props);
        this.state = { burgerPrice: 0 };
    }

    componentDidMount() {
        this.setState({ burgerPrice: this.calcPrice(store.getState().burgerAppState.ingredients) });
        store.subscribe(() => {
            this.setState({ burgerPrice: this.calcPrice(store.getState().burgerAppState.ingredients) });
        })
    }

    public render(): JSX.Element {
        return (
            <div className="Price InfoClass">
                price: {this.state.burgerPrice} $
            </div>
        );
    }

    calcPrice(ingredients: IngredientType[]): number {
        let price = AppLogic.ingredients.topBun.price + AppLogic.ingredients.bottomBun.price;
        ingredients.forEach(element => {
            if (element === IngredientType.CHEESE) {
                price += AppLogic.ingredients.cheese.price;
            } else if (element === IngredientType.PATTY) {
                price += AppLogic.ingredients.patty.price;
            } else if (element === IngredientType.TOMATO) {
                price += AppLogic.ingredients.tomato.price;
            } else if (element === IngredientType.SALAD) {
                price += AppLogic.ingredients.salad.price;
            }
        });
        return price;
    }
}