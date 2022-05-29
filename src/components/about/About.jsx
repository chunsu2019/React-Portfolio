import "./about.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHtml5, faCss3, faJs, faSass, faReact, faBootstrap,
    faNodeJs, faPython,
    faDocker, faAws
} from "@fortawesome/free-brands-svg-icons";


const About = ({ skillSelected, setSkillSelected }) => {

    return (
        <section className="about" id="about">
            <div className="aboutWrapper">
                <h1>About Me</h1>
                <div className="wrapper">
                    <img src="assets/me.jpg" alt="My selfie" className="selfie"/>

                    <div className="textWrapper">
                        <div className="aboutMeText">
                            <p className="textDescription">Hello! I'm Su, an aspiring web developer. I enjoy creating interactive
                                application. And my goal as a developer is to build applications that make
                                everyday life better and more entertaining.
                            </p>
                        </div>

                        <div className="mySkill">
                            <p className="textDescription">I have experience working with these technologies</p>

                            <div className="skillClassifcation">
                                <button onClick={() => setSkillSelected("frontend")}
                                    className={(skillSelected === "frontend") ? "active" : ""}>
                                    Frontend
                                </button>

                                <button onClick={() => setSkillSelected("backend")}
                                    className={(skillSelected === "backend") ? "active" : ""}>
                                    Backend
                                </button>

                                <button onClick={() => setSkillSelected("others")}
                                    className={(skillSelected === "others") ? "active" : ""}>
                                    Others
                                </button>
                            </div>

                            <div className="skillIcons">
                                <div className={(skillSelected === "frontend") ? "icons" : "icons-hidden"}>
                                    <FontAwesomeIcon icon={faHtml5} size="3x" color="white" className="faIcon" />
                                    <FontAwesomeIcon icon={faCss3} size="3x" color="white" className="faIcon" />
                                    <FontAwesomeIcon icon={faJs} size="3x" color="white" className="faIcon" />
                                    <FontAwesomeIcon icon={faSass} size="3x" color="white" className="faIcon" />
                                    <FontAwesomeIcon icon={faReact} size="3x" color="white" className="faIcon" />
                                    <FontAwesomeIcon icon={faBootstrap} size="3x" color="white" className="faIcon" />
                                </div>

                                <div className={(skillSelected === "backend") ? "icons" : "icons-hidden"}>
                                    <FontAwesomeIcon icon={faNodeJs} size="3x" color="white" className="faIcon" />
                                    <FontAwesomeIcon icon={faPython} size="3x" color="white" className="faIcon" />
                                </div>

                                <div className={(skillSelected === "others") ? "icons" : "icons-hidden"}>
                                    <FontAwesomeIcon icon={faDocker} size="3x" color="white" className="faIcon" />
                                    <FontAwesomeIcon icon={faAws} size="3x" color="white" className="faIcon" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
