import "./styles.css";
import { Link } from "react-router-dom";

function BurgerMenu() {
    return (
        <div className="overlay">
            <nav className="burger-menu-box">
                <ul>
                <li>
                            <Link to="/">Main</Link>
                        </li>
                        <li>
                            <Link to="/plant-post">Plant post</Link>
                        </li>
                        <li>
                            <Link to="/ceramics">Ceramics</Link>
                        </li>
                    <li>
                        <a href="#!">Tables</a>
                    </li>
                    <li>
                        <a href="#!">Chairs</a>
                    </li>
                    <li>
                        <a href="#!">Crockery</a>
                    </li>
                    <li>
                        <a href="#!">Tableware</a>
                    </li>
                    <li>
                        <a href="#!">Cultery</a>
                    </li>
                    <li>
                        <a href="#!">Card</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default BurgerMenu;
