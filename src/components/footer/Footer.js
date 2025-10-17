import "./styles.css";

function Footer() {
    return (
        <footer className="footer-nav-wrap">
            <div className="footer-menu flex-wrap flex-between">
                <div className="footer-links flex-wrap">
                    <ul>
                        <li>
                            <a href="#!">Menu</a>
                        </li>
                        <li>
                            <a href="#!">New arrivals</a>
                        </li>
                        <li>
                            <a href="#!">Best sellers</a>
                        </li>
                        <li>
                            <a href="#!">Recently viewed</a>
                        </li>
                        <li>
                            <a href="#!">Popular this week</a>
                        </li>
                        <li>
                            <a href="#!">All products</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href="#!">Categories</a>
                        </li>
                        <li>
                            <a href="#!">Crockery</a>
                        </li>
                        <li>
                            <a href="#!">Furniture</a>
                        </li>
                        <li>
                            <a href="#!">Plant pots</a>
                        </li>
                        <li>
                            <a href="#!">Homeware</a>
                        </li>
                        <li>
                            <a href="#!">Chairs</a>
                        </li>
                        <li>
                            <a href="#!">Crockery</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href="#!">Our company</a>
                        </li>
                        <li>
                            <a href="#!">About us</a>
                        </li>
                        <li>
                            <a href="#!">Vacancies</a>
                        </li>
                        <li>
                            <a href="#!">Contact us</a>
                        </li>
                        <li>
                            <a href="#!">Privacy</a>
                        </li>
                        <li>
                            <a href="#!">Returns policy</a>
                        </li>
                    </ul>
                </div>
                <form id="email-wrapper">
                    <div className="email-box">
                        <label for="email">Join our mailing list</label>
                        <div className="input-email">
                            <input
                                type="email"
                                id="email"
                                placeholder="your@email.com"
                            ></input>
                            <input
                                type="submit"
                                className="submit"
                                value="Sign In"
                            ></input>
                        </div>
                    </div>
                </form>
            </div>
            <div className="copyright">
                <p>Copyright 2022 Avion LTD</p>
            </div>
        </footer>
    );
}

export default Footer;
