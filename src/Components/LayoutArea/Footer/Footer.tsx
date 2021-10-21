import { useState } from "react";
import CreditsPage from "../../CreditsPage/CreditsPage";
import "./Footer.css";

export default function Footer(): JSX.Element {

    const [hidden, setHidden] = useState<"hidden" | "">("hidden");

    return (
        <div className="Footer">
            <a href="https://far-art-portfolio.netlify.app/home"><p>All rights reserved to &copy; Artur Farmanov</p></a>

            <div
                className="ToggleCredits"
            >
                <p onClick={() => {
                    if (hidden === "hidden") {
                        setHidden("");
                    } else {
                        setHidden("hidden");
                    }
                }}>Credits</p>
            </div>
            <div
                className={`Credits ${hidden}`}
                onBlur={() => setHidden("hidden")}
            >
                <CreditsPage />
            </div>
        </div>
    );
}