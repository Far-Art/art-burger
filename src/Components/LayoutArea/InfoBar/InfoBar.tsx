import BurgerName from "../../BurgerArea/BurgerInfo/BurgerName/BurgerName";
import Calories from "../../BurgerArea/BurgerInfo/Calories/Calories";
import Price from "../../BurgerArea/BurgerInfo/Price/Price";
import "./InfoBar.css";

export default function InfoBar(): JSX.Element {
    return (
        <div className="InfoBar">
            <Calories />
            <BurgerName />
            <Price />
        </div>
    );
}