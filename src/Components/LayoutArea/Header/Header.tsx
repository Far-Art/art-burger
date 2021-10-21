import ClipText from "../../ClipText/ClipText";
import "./Header.css";
import skyImage from "../../../Assets/Backgrounds/sky.jpg";

export default function Header(): JSX.Element {
    const shadow = `0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),
    0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07),
    0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07)`;
    return (
        <div className="Header">
            <ClipText
                text="Art Burger"
                fontSize="clamp(30px, 10vw, 55px)"
                image={skyImage}
                imageFloat="top"
                margin="5px"
                textShadow={shadow}
                filter="contrast(120%) hue-rotate(150deg)" />
        </div>
    );
}