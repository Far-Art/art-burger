import { Component } from "react";
import store from "../../../Redux/Store";

export default class IngredientsList extends Component {

    private counter = 1;

    constructor(props:{}){
        super(props);
        this.state = {
            list:[]
        };
    }

    componentDidMount(){
        store.subscribe(() => {
            this.setState(store.getState().burgerState.ingredients);
        })
    }

    render() {
        return store.getState().burgerState.ingredients.map(item => <li className={item} key={item + this.counter++} />);
    }

}