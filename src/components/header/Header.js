import searchIcon from "./img/Search.svg";
import menuIcon from "./img/Menu.svg";
import cartIcon from "./img/Shopping--cart.svg";
import userIcon from "./img/User--avatar.svg";
import "./styles.css";
import { useMediaQuery } from "react-responsive";
import BurgerMenu from "../burgerMenu/BurgerMenu";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Header() {
    const isDesktop = useMediaQuery({ minWidth: 1024 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
    const isMobile = useMediaQuery({ maxWidth: 767 });

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (isDesktop && isOpen) {
            setIsOpen(false);
        }
    }, [isOpen, isDesktop]);

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }
    }, [isOpen]);

    return (
        <header>
            <div className="top-bar-wrapper">
                {isDesktop && (
                    <img
                        className="headerIcon to-down"
                        src={searchIcon}
                        alt="Search"
                    />
                )}
                <Link to="/" className="logo">
                    Avion
                </Link>
                <div className="user-cart-container">
                    {isDesktop && (
                        <>
                            <img
                                className="headerIcon"
                                src={userIcon}
                                alt="User"
                            />
                            <Link to="/cart">
                                <img
                                    className="headerIcon"
                                    src={cartIcon}
                                    alt="Cart"
                                />
                            </Link>
                        </>
                    )}
                    {(isMobile || isTablet) && (
                        <>
                            <img
                                className="headerIcon"
                                src={searchIcon}
                                alt="Search"
                            />
                            <img
                                className="headerIcon"
                                src={menuIcon}
                                alt="Menu"
                                onClick={toggleMenu}
                            />
                        </>
                    )}
                </div>
            </div>
            {isDesktop && (
                <nav className="nav-to-show">
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
                            <Link to="/tables">Tables</Link>
                        </li>
                        <li>
                            <Link to="/chairs">Chairs</Link>
                        </li>
                        <li>
                            <Link to="/crockery">Crockery</Link>
                        </li>
                        <li>
                            <Link to="/tableware">Tableware</Link>
                        </li>
                        <li>
                            <Link to="/cultery">Cultery</Link>
                        </li>
                    </ul>
                </nav>
            )}
            {isOpen && <BurgerMenu />}
        </header>
    );
}

export default Header;
