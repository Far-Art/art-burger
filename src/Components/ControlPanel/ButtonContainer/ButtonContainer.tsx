import AppLogic from "../../../AppLogic/AppLogic";
import { addIngredientAction, clearIngredientsAction, removeIngredientAction } from "../../../Redux/Actions/BurgerAction";
import { useAppSelector } from "../../../Redux/Hooks/hooks";
import store from "../../../Redux/Store";
import { IngredientType } from "../../BurgerArea/IngredientType";
import "./ButtonContainer.css";

interface ButtonContainerProps {
    ingredient: IngredientType;
    icon?: string;
    clear?: boolean;
}

export default function ButtonContainer(props: ButtonContainerProps): JSX.Element {

    const ingredientAmount = useAppSelector(state => state.burgerAppState);

    function setDisabledStyle(action: "add" | "remove") {
        const amount = ingredientAmount.amount[props.ingredient];
        switch (action) {
            case "add":
                if (amount === AppLogic.ingredients[props.ingredient].maxAmount) {
                    return "disabled";
                }
                break;
            case "remove":
                if (amount === 0) {
                    return "disabled";
                }
                break;
            default:
                return "";
        }
    }

    function render() {
        if (props.clear) {
            return (<button
                className={`control-btn clear-btn ${ingredientAmount.amount.cheese === 0 &&
                    ingredientAmount.amount.patty === 0 &&
                    ingredientAmount.amount.salad === 0 &&
                    ingredientAmount.amount.tomato === 0 && "disabled"}`}
                onClick={() => {
                    store.dispatch(clearIngredientsAction());
                }}>Clear</button>);
        }
        return (
            <>
                <button
                    className={`${("remove-" + props.ingredient)} control-btn left-btn ${setDisabledStyle("remove")}`}
                    onClick={() => {
                        if (setDisabledStyle("remove") !== "disabled") {
                            store.dispatch(removeIngredientAction(props.ingredient));
                        }
                    }}
                >
                    -
                </button>
                <div className="text-area">
                    <img className="ingredient-icon" src={props.icon} alt={props.ingredient} />
                    {props.ingredient}
                </div>
                <button
                    className={`${("add-" + props.ingredient)} control-btn right-btn ${setDisabledStyle("add")}`}
                    onClick={() => {
                        if (setDisabledStyle("add") !== "disabled") {
                            store.dispatch(addIngredientAction(props.ingredient));
                        }
                    }}
                >
                    +
                </button>
            </>
        );
    }

    return (
        <div className="ButtonContainer">
            {render()}
        </div>
    );
}

