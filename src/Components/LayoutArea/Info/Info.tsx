import Calories from "../../InfoArea/Calories/Calories";
import Price from "../../InfoArea/Price/Price";
import "./Info.css";

/* This is navigation menu for the site */
function Info(): JSX.Element {
    return (
        <div className="Info">
            <Calories />
            <Price />
        </div>
    );
}

export default Info;
