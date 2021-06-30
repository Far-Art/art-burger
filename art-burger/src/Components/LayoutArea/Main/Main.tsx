import BurgerContainer from "../BurgerContainer/BurgerContainer";
import "./Main.css";
import burgerGirl from '../../../Assets/Images/burger_girl.png';
import girlHands from '../../../Assets/Images/hands.png';

function Main(): JSX.Element {
    return (
        <div className="Main">
            <div >
                <img id="burger-girl" className="girl-image" src={burgerGirl} alt="Girl holding a burger"/>
                <a href="https://www.dreamstime.com/vector-color-pop-art-comic-style-illustration-girl-eating-cheeseburger-beautiful-business-woman-holding-big-hamburger-image141847574">Dreamstime ID 141847574 Yanatomashova</a>
            </div> 
            <div >
                <BurgerContainer />
            </div>
            <div >
                <img id="hands" className="girl-image" src={girlHands} alt="Girls hands on top of a burger" />
            </div>
            <script src="../../../Scripts/CreateIngredient.ts">
            
            </script>
        </div>
    );
}

export default Main;
