import "./topbar.scss";

const Topbar = ({ mobileMenuActive, setMobileMenuActive }) => {

    return (
        <div className="topbar">
            <div className="container">
                <a href="/" className="logo">{"< "}CS{" / >"}</a>

                <div className="right">

                    <div className="desktopMenu">
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
                    </div>

                    <a href="assets/myResume.pdf" target={"_blank"} rel={"noreferrer"} className="resume">Resume</a>

                    <div className={mobileMenuActive ? "hamburger active" : "hamburger"}
                        onClick={() => setMobileMenuActive((prevState) => !prevState)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar;
