import ButtonContainer from "../ButtonContainer/ButtonContainer";
import "./BurgerControlPanel.css";
import cheeseIcon from '../../../Assets/Icons/cheese-svgrepo-com.svg';
import saladIcon from '../../../Assets/Icons/salad-svgrepo-com.svg';
import tomatoIcon from '../../../Assets/Icons/tomato-svgrepo-com.svg';
import meatIcon from '../../../Assets/Icons/meat-burger-svgrepo-com.svg';
import { IngredientType } from "../../BurgerArea/IngredientType";

export default function BurgerControlPanel(): JSX.Element {
    return (
        <div className="BurgerControlPanel">
            <ButtonContainer ingredient={IngredientType.CHEESE} icon={cheeseIcon} />
            <ButtonContainer ingredient={IngredientType.SALAD} icon={saladIcon} />
            <ButtonContainer ingredient={IngredientType.TOMATO} icon={tomatoIcon} />
            <ButtonContainer ingredient={IngredientType.PATTY} icon={meatIcon} />
            <ButtonContainer clear={true} ingredient={IngredientType.PATTY} />
        </div>
    );
}