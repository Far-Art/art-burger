import "./BurgerContainer.css";

function BurgerContainer(): JSX.Element {
    return (
        <div id="burger-container" className="BurgerContainer">
            <ol className="burger">
                <li id="top-bun"></li>
            </ol>
			<ol id="ingr" className="burger custom-ingredients">
                <li className="salad"></li>
                <li className="tomato"></li>
                <li className="patty"></li>
                <li className="salad"></li>
                <li className="tomato"></li>
                <li className="cheese"></li>
                <li className="patty"></li>
                <li className="salad"></li>
            </ol>
            <ol className="burger">
                <li id="bottom-bun"></li>
            </ol>
        </div>
    );
}

export default BurgerContainer;
