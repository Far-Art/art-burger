import BurgerContainer from "../../BurgerArea/BurgerContainer/BurgerContainer";
import burgerGirl from '../../../Assets/Images/burger_girl.png';
import girlHands from '../../../Assets/Images/hands.png';
import table from '../../../Assets/Images/table.png';
import "./Main.css";

export default function Main(): JSX.Element {
    return (
        <div className="Main">
            <div className="burger-girl girl-image">
                <img src={burgerGirl} alt="Girl holding a burger" />
            </div>
            <div className="Burger-Container">
                <BurgerContainer />
            </div>
            <div className="hands girl-image">
                <img src={girlHands} alt="Girls hands on top of a burger" />
            </div>
            <div className="table" >
                <img src={table} alt="table holding burger" />
            </div>
        </div>
    );
}