import { useAppSelector } from "../../../Redux/Hooks/hooks";
import { IngredientType } from "../IngredientType";
import "./BurgerContainer.css";

export default function BurgerContainer(): JSX.Element {

    const burgerAppState = useAppSelector((state) => state.burgerAppState);

    function setQuantityStyle() {
        const quantityMap = new Map<IngredientType, "even" | "">();
        quantityMap.set(IngredientType.CHEESE, "");
        quantityMap.set(IngredientType.PATTY, "");
        quantityMap.set(IngredientType.SALAD, "");
        quantityMap.set(IngredientType.TOMATO, "");
        return function updateMap(ingredient: IngredientType) {
            if (quantityMap.get(ingredient) === "even") {
                quantityMap.set(ingredient, "");
                return `${ingredient}-even`;
            }
            quantityMap.set(ingredient, "even");
            return "";
        }
    }

    const ingredientQuantityStyle = setQuantityStyle();

    return (
        <div className="BurgerContainer">
            <section className="Burger">
                <div className="top-bun" />
                <div className="Ingredients">
                    {[...burgerAppState.ingredients].reverse().map((ingr, index) => <div style={{ zIndex: index * -1 }} className={`${ingr} ${ingredientQuantityStyle(ingr)}`} key={index} />)}
                </div>
                <div className="bottom-bun" />
            </section>
        </div>
    );
}