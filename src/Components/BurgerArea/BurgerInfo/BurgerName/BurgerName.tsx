import AppLogic from "../../../../AppLogic/AppLogic";
import { useAppSelector } from "../../../../Redux/Hooks/hooks";
import "./BurgerName.css";

export default function BurgerName(): JSX.Element {
    const ingredientAmount = useAppSelector(state => state.burgerAppState);
    function render() {
        const appIngredientsLogic = AppLogic.ingredients;

        const cheese = ingredientAmount.amount.cheese;
        const patty = ingredientAmount.amount.patty;
        const salad = ingredientAmount.amount.salad;
        const tomato = ingredientAmount.amount.tomato;

        // const onlyCheese: boolean = cheese > 0 && patty === 0 && salad === 0 && tomato === 0;
        const onlyCheese: boolean = cheese > 0 && !patty && !salad && !tomato;
        const onlyPatty: boolean = !cheese && patty > 0 && !salad && !tomato;
        const onlySalad: boolean = !cheese && !patty && salad > 0 && !tomato;
        const onlyTomato: boolean = !cheese && !patty && !salad && tomato > 0;

        // none case
        if (!cheese && !patty && !salad && !tomato) {
            return "Bread Burger";
        }

        // only cheese case
        if (onlyCheese && cheese === appIngredientsLogic.cheese.maxAmount) {
            return "CheeseKing";
        } else if (onlyCheese && cheese >= appIngredientsLogic.cheese.maxAmount - 1) {
            return "Double CheeseMan";
        } else if (onlyCheese && cheese >= appIngredientsLogic.cheese.maxAmount / 2 - 1) {
            return "CheeseMan";
        } else if (onlyCheese) {
            return "A good start";
        }

        // only patty case
        if (onlyPatty && patty === appIngredientsLogic.patty.maxAmount) {
            return "Lion Caught Elephant";
        } else if (onlyPatty && patty === appIngredientsLogic.patty.maxAmount - 1) {
            return "Double Patty Lover";
        } else if (onlyPatty && patty >= appIngredientsLogic.patty.maxAmount / 2 - 1) {
            return "Patty Lover";
        } else if (onlyPatty) {
            return "Quick picnic";
        }

        // only salad case
        if (onlySalad && salad === appIngredientsLogic.salad.maxAmount) {
            return "Meeeee";
        } else if (onlySalad && salad >= appIngredientsLogic.salad.maxAmount / 2) {
            return "Goat Burger";
        } else if (onlySalad) {
            return "Salad Burger";
        }

        // only tomato case
        if (onlyTomato && tomato === appIngredientsLogic.tomato.maxAmount) {
            return "Soacking Wet Bun Burger";
        } else if (onlyTomato && tomato === appIngredientsLogic.tomato.maxAmount - 1) {
            return "Wet Bun Burger";
        } else if (onlyTomato && tomato >= appIngredientsLogic.tomato.maxAmount / 2) {
            return " Still Tomato Burger";
        } else if (onlyTomato) {
            return "Tomato Burger";
        }

        // tomato and salad cases
        if (tomato && salad && !patty && !cheese) {
            if (tomato >= appIngredientsLogic.tomato.maxAmount - 1 && salad >= appIngredientsLogic.salad.maxAmount - 1) {
                return "Hungry vegan";
            } else if (tomato >= appIngredientsLogic.tomato.maxAmount - 1 && salad) {
                return "Wet Vegan Friendly";
            } else if ((tomato >= appIngredientsLogic.tomato.maxAmount / 2) && (salad >= appIngredientsLogic.salad.maxAmount / 2)) {
                return "Double Vegan Friendly";
            }
            return "Vegan Friendly";
        }

        // salad and cheese cases
        if (!tomato && salad && !patty && cheese) {
            if (salad >= appIngredientsLogic.salad.maxAmount && cheese >= appIngredientsLogic.cheese.maxAmount) {
                return "YOU LOST YOUR MIND!!!";
            } else if (salad >= appIngredientsLogic.salad.maxAmount - 1 && cheese >= appIngredientsLogic.cheese.maxAmount - 1) {
                return "No One Will Judge You";
            } else if ((salad >= appIngredientsLogic.salad.maxAmount / 2) && (cheese >= appIngredientsLogic.cheese.maxAmount / 2)) {
                return "On A Deep Vegetarian Path";
            }
            return "On A Vegetarian Path";
        }

        // patty and cheese cases
        if (!tomato && !salad && patty && cheese) {
            if (patty >= appIngredientsLogic.patty.maxAmount - 1 && cheese >= appIngredientsLogic.cheese.maxAmount - 1) {
                return "Mad Vegan Hater";
            } else if ((patty >= appIngredientsLogic.patty.maxAmount / 2) && (cheese >= appIngredientsLogic.cheese.maxAmount / 2)) {
                return "Vegan Hater";
            } else if ((patty >= 1) && (cheese >= 2)) {
                return "No Veg Cheese Burger";
            }
            return "Tiny cheese burger";
        }

        // patty and tomato cases
        if (tomato && !salad && patty && !cheese) {
            if (patty >= appIngredientsLogic.patty.maxAmount && tomato >= appIngredientsLogic.tomato.maxAmount) {
                return "At least I'm well-fed";
            } else if ((patty >= appIngredientsLogic.patty.maxAmount / 2) && (tomato >= appIngredientsLogic.tomato.maxAmount / 2)) {
                return "Double Wettie Patty";
            } else if ((patty >= 1) && (tomato >= 2)) {
                return "Wettie Patty";
            }
            return "Tiny Wettie Patty";
        }

        // tomato, salad and cheese cases
        if (tomato && salad && !patty && cheese) {
            if (tomato === appIngredientsLogic.tomato.maxAmount && salad === appIngredientsLogic.salad.maxAmount && cheese === appIngredientsLogic.cheese.maxAmount) {
                return "Very Hungry Vegetarian";
            } else if (tomato >= appIngredientsLogic.tomato.maxAmount / 2 && salad >= appIngredientsLogic.salad.maxAmount / 2 && cheese >= appIngredientsLogic.cheese.maxAmount / 2) {
                return "Hungry Vegetarian";
            }
            return "Vegetarian on diet";
        }

        // tomato, salad and patty cases
        if (tomato && salad && patty && !cheese) {
            if (tomato === appIngredientsLogic.tomato.maxAmount && salad === appIngredientsLogic.salad.maxAmount && patty === appIngredientsLogic.patty.maxAmount) {
                return "Oh Merciful God";
            } else if (tomato >= appIngredientsLogic.tomato.maxAmount / 2 && salad >= appIngredientsLogic.salad.maxAmount / 2 && patty >= appIngredientsLogic.patty.maxAmount / 2) {
                return "Orthodox Burger";
            }
            return "Kosher Burger";
        }

        // all ingredients cases
        if (tomato && salad && patty && cheese) {
            if (tomato === appIngredientsLogic.tomato.maxAmount && salad === appIngredientsLogic.salad.maxAmount && patty === appIngredientsLogic.patty.maxAmount && cheese === appIngredientsLogic.cheese.maxAmount) {
                return "IS THIS EVEN POSSIBLE?!";
            } else if (tomato >= appIngredientsLogic.tomato.maxAmount / 2 && salad >= appIngredientsLogic.salad.maxAmount / 2 && patty >= appIngredientsLogic.patty.maxAmount / 2 && cheese >= appIngredientsLogic.cheese.maxAmount / 2) {
                return "Double Cheese Burger";
            }
            return "Cheese Burger";
        }

        return "Simple Burger";

    }
    return (
        <div className="BurgerName InfoClass">
            {`Name: ${render()}`}
        </div>
    );
}