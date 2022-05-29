import "./menu.scss";

const Menu = ({ mobileMenuActive, setMobileMenuActive }) => {

    return (
        <nav className={mobileMenuActive ? "menu active" : "menu"}>
            <ul>
                <li>
                    <a href="#home" onClick={() => setMobileMenuActive((prevState) => !prevState)}>Home</a>
                </li>

                <li>
                    <a href="#about" onClick={() => setMobileMenuActive((prevState) => !prevState)}>About</a>
                </li>

                <li>
                    <a href="#works" onClick={() => setMobileMenuActive((prevState) => !prevState)}>Works</a>
                </li>

                <li>
                    <a href="#contact" onClick={() => setMobileMenuActive((prevState) => !prevState)}>Contact</a>
                </li>
            </ul>
        </nav>
    )
}

export default Menu;