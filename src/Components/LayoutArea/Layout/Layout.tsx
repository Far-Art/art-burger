import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Info from "../Info/Info";
import Main from "../Main/Main";
import SidePanel from "../SidePanel/SidePanel";
import "./Layout.css";

function Layout(): JSX.Element {
    return (
        <div className="Layout">
                <header>
                    <Header />
                </header>
                <div>
                    <Info />
                </div>
                <section>
                    <aside>
                        <SidePanel/>
                    </aside>
                    <main>
                        <Main />
                    </main>
                </section>
                <footer>
                    <Footer />
                </footer>
        </div>
    );
}

export default Layout;
