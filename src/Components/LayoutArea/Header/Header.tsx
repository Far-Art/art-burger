import "./Header.css";
import "./MobileHeader.css";

function Header(): JSX.Element {
    return (
        <div className="Header">
			<h1>Art Burger</h1>
            <h1 id="h1-shadow" >Art Burger</h1>
        </div>
    );
}

export default Header;
