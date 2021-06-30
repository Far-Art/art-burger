import ButtonContainer from "../ButtonContainer/ButtonContainer";
import "./BurgerControlPanel.css";

import cheeseIcon from '../../../Assets/Icons/cheese-svgrepo-com.svg';
import saladIcon from '../../../Assets/Icons/salad-svgrepo-com.svg';
import tomatoIcon from '../../../Assets/Icons/tomato-svgrepo-com.svg';
import meatIcon from '../../../Assets/Icons/meat-burger-svgrepo-com.svg';

function BurgerControlPanel(): JSX.Element {
    return (
        <div className="BurgerControlPanel">
			<ButtonContainer text={"cheese"} icon={cheeseIcon} />
            <ButtonContainer text={"salad"} icon={saladIcon} />
            <ButtonContainer text={"tomato"} icon={tomatoIcon} />
            <ButtonContainer text={"patty"} icon={meatIcon} />
        </div>
    );
}

export default BurgerControlPanel;
