import Calories from "../../BurgerArea/BurgerInfo/Calories/Calories";
import Price from "../../BurgerArea/BurgerInfo/Price/Price";
import "./InfoBar.css";

/* This is navigation menu for the site */
function InfoBar(): JSX.Element {
    return (
        <div className="InfoBar">
            <Calories />
            <Price />
        </div>
    );
}

export default InfoBar;
