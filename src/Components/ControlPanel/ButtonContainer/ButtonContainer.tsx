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
            <script>{hover()}</script>
        </div>
    );
}

function hover():number{
    let buttons = document.getElementsByClassName("control-btn");
    buttons.item(0)
    return 0;
}

export default ButtonContainer;
