import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import InfoBar from "../InfoBar/InfoBar";
import Main from "../Main/Main";
import SidePanel from "../SidePanel/SidePanel";
import "./Layout.css";
import "./MobileLayout.css";

function Layout(): JSX.Element {
    return (
        <div className="Layout">
                <header>
                    <Header />
                </header>
                <div id="infoBar">
                    <InfoBar />
                </div>
                <aside>
                    <SidePanel/>
                </aside>
                <main>
                    <Main />
                </main>
                <footer>
                    <Footer />
                </footer>
        </div>
    );
}

export default Layout;
