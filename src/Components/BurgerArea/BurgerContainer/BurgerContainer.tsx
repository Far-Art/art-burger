import { IngredientType } from "../IngredientType";
import "./BurgerContainer.css";
import BurgerList from "./IngredientsList";

function BurgerContainer(): JSX.Element {
    // const burger = new BurgerList({});
    return (
        <div className="BurgerContainer">
            <ol className="burger">
                <li id="top-bun"></li>
            </ol>
            <ol className="burger">
                <BurgerList/>
            </ol>
            <ol className="burger">
                <li id="bottom-bun"></li>
            </ol>
        </div>
    );
}

export default BurgerContainer;
