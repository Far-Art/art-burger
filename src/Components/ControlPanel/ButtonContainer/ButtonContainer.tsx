import "./ButtonContainer.css";

interface Values{
    text:string;
    icon:string;
}

function ButtonContainer(props:Values): JSX.Element {
    return (
        <div className="ButtonContainer">
			<button className="control-btn left-btn">
                -
            </button>
            <div id="icon-area">
                <img src={props.icon} alt="ingredient-icon"></img>
            </div>
            <div id="text-area">
                {props.text}
            </div>
            <button className="control-btn right-btn">
                +
            </button>
        </div>
    );
}



export default ButtonContainer;
