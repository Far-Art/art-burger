import BurgerContainer from "../../BurgerArea/BurgerContainer/BurgerContainer";
import burgerGirl from '../../../Assets/Images/burger_girl.png';
import dinner from '../../../Assets/Images/DinnerImg.svg';
import girlHands from '../../../Assets/Images/hands.png';
import table from '../../../Assets/Images/table.svg';
import "./Main.css";
import "./MobileMain.css";

function Main(): JSX.Element {
    return (
        <div className="Main">
            <div id="burger-girl" className="girl-image">
                <img src={burgerGirl} alt="Girl holding a burger"/>
            </div> 
            <div className="Burger-Container">
                <BurgerContainer />
            </div>
            <div id="hands" className="girl-image">
                <img src={girlHands} alt="Girls hands on top of a burger" />
            </div>
            <div id="table" >
                <img src={table} alt="table image" />
                <a href="https://www.dreamstime.com/vector-color-pop-art-comic-style-illustration-girl-eating-cheeseburger-beautiful-business-woman-holding-big-hamburger-image141847574">Dreamstime ID 141847574 Yanatomashova</a>
            </div>
        </div>
    );
}

// function Main(): JSX.Element {
//     return (
//         <div className="Main">
           
//             <div className="Burger-Container">
//                 <BurgerContainer />
//             </div>
//             <div id="dinner">
//                 <img src={dinner} alt="People Eat at table"/>
//             </div> 
            
//         </div>
//     );
// }


export default Main;