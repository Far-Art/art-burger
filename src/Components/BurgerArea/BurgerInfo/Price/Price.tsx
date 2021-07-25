import { Component } from "react";
import "./Price.css";
import store from "../../../../Redux/Store";
import { IngredientType } from "../../IngredientType";

interface PriceState {
    burgerPrice: number;
}
class Price extends Component<{},PriceState> {

    private CHEESE_COST = 1;
    private PATTY_COST = 2.5;
    private TOMATO_COST = 0.5;
    private SALAD_COST = 0.5;

    public constructor(props:{}){
        super(props);
        this.state = { burgerPrice: 0};
    }

    componentDidMount(){
        this.setState({burgerPrice: this.calcPrice(store.getState().burgerState.ingredients)});
        store.subscribe(() => {
            this.setState({burgerPrice: this.calcPrice(store.getState().burgerState.ingredients)});
        })
    }

    public render(): JSX.Element {
        return (
            <div className="Price">
                price: {this.state.burgerPrice} $
            </div>
        );
    }

    calcPrice(ingredients: IngredientType[]):number{
        let price = 1; // top and bottom bun cost
            ingredients.forEach(element => {
                if(element === IngredientType.CHEESE){
                    price += this.CHEESE_COST;
                } else if(element === IngredientType.PATTY){
                    price += this.PATTY_COST;
                } else if(element === IngredientType.TOMATO){
                    price += this.TOMATO_COST;
                } else if(element === IngredientType.SALAD){
                    price += this.SALAD_COST;
                }
            });
        return price;
    }
}

export default Price;

