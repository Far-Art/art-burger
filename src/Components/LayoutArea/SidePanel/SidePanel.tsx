import BurgerControlPanel from "../../ControlPanel/BurgerControlPanel/BurgerControlPanel";
import "./SidePanel.css";

function SidePanel(): JSX.Element {
    return (
        <div className="SidePanel">
			<BurgerControlPanel />
        </div>
    );
}

export default SidePanel;
