import "./works.scss";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub, faYoutubeSquare,
    faPython, faBootstrap, faNodeJs, faReact
} from "@fortawesome/free-brands-svg-icons";

import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { act } from "react-dom/test-utils";

const Works = () => {
    const [activeItem, setActiveItem] = useState(1);
    const carouselLength = 2;

    const slideLeft = () => {

        if (activeItem === 1) {
            setActiveItem(carouselLength)

        }
        else {
            setActiveItem(activeItem - 1);
        }
    }

    const slideRight = () => {

        if (activeItem === carouselLength) {
            setActiveItem(1)

        }
        else {
            setActiveItem(activeItem + 1);
        }
    }

    return (
        <section className="works" id="works">
            <h1>My Works</h1>

            <div className="projectContainer">

                <div className="projectImg">
                    <img src="assets/project3.png" alt="project3"
                        onClick={() => window.open("#", "_blank")} />
                    <div className="projectImgOverlay">
                        <FontAwesomeIcon icon={faReact} size="3x" color="white" className="faIcon" />
                    </div>
                </div>

                <div className="projectDescription">
                    <h2>React Portfolio (2022)</h2>
                    <p>My portfolio and also my first React project. It is a single-page static website. 
                        The site is hosted on AWS S3. Used AWS Route53 for domain registration and DNS routing. 
                        And AWS Cloudfront to improve content delivery.</p>

                    <div className="iconsContainer">
                        <FontAwesomeIcon icon={faGithub} size="3x" color="white" className="faIcon" />
                        <a href="#" target={"_blank"}>Demo</a>
                    </div>
                </div>
            </div>
            <div className="projectContainer">
                <div className="projectImg">
                    <img src="assets/project2.png" alt="project2"
                        onClick={() => window.open("http://172-env.eba-ubqmtxey.us-west-1.elasticbeanstalk.com/", "_blank").opener = null} />
                    <div className="projectImgOverlay">
                        <FontAwesomeIcon icon={faNodeJs} size="3x" color="white" className="faIcon" />
                        <FontAwesomeIcon icon={faBootstrap} size="3x" color="white" className="faIcon" />
                        <img src="assets/mongodb.png" alt="mongodb" className="icon" />
                    </div>
                </div>


                <div className="projectDescription">
                    <h2>Story Sharing Web App (2021)</h2>
                    <p>A school project for the enterprise software course.
                        It is a simple website that allow users to write stuffs and post them on the public page.
                        Readers can leave a rating and comment in any post.
                        <br/>
                        <br/>
                        I had a full-stack role in this project. I learned how to use the block styled editor, Editor.js. 
                        And external APIs like ImgBB's api for image hosting.
                        </p>

                    <div className="iconsContainer">
                        <FontAwesomeIcon icon={faGithub} size="3x" color="white" className="faIcon"
                            onClick={() => window.open("https://github.com/chunsu2019/sjsu-cmpe172-team9-Project", "_blank").opener = null} />
                        <FontAwesomeIcon icon={faYoutubeSquare} size="3x" color="white" className="faIcon"
                            onClick={() => window.open("https://www.youtube.com/watch?v=pmANIJlna2Y", "_blank").opener = null} />
                        <a href="http://172-env.eba-ubqmtxey.us-west-1.elasticbeanstalk.com/" target={"_blank"} rel={"noreferrer"}>Demo</a>
                    </div>
                </div>
            </div>

            <div className="projectContainer">
                <div className="projectImg">
                    <img src="assets/project1.png" alt="project1"
                        onClick={() => window.open("http://seniorproject-env.eba-7paiixr2.us-west-1.elasticbeanstalk.com/", "_blank", "noopener")} />
                    <div className="projectImgOverlay">
                        <FontAwesomeIcon icon={faPython} size="3x" color="white" className="faIcon" />
                        <FontAwesomeIcon icon={faBootstrap} size="3x" color="white" className="faIcon" />
                        <img src="assets/mongodb.png" alt="mongodb" className="icon" />
                    </div>
                </div>

                <div className="projectDescription">

                    <h2>Senior Design Project (2021)</h2>
                    <p>
                        The project goal was to make health counseling services more accessible.
                        The idea was to allow normal users to create their specific health profile.
                        Health specialist can view these profile and provide 
                        counseling service through real-time messaging if they want to.
                        </p>

                    <div className="iconsContainer">
                        <FontAwesomeIcon icon={faGithub} size="3x" color="white" className="faIcon"
                            onClick={() => window.open("https://github.com/chunsu2019/SeniorProoject", "_blank").opener = null} />
                        <FontAwesomeIcon icon={faYoutubeSquare} size="3x" color="white" className="faIcon"
                            onClick={() => window.open("https://www.youtube.com/watch?v=jAQO0mhvvXM", "_blank").opener = null} />
                        <a href="http://seniorproject-env.eba-7paiixr2.us-west-1.elasticbeanstalk.com/" target={"_blank"} rel={"noreferrer"}>Demo</a>
                    </div>
                </div>
            </div>

            <div className="projectContainer">
                <div className="projectImg">
                    <img src="assets/project0.png" alt="project0"
                        onClick={() => window.open("https://www.youtube.com/watch?v=0j5vFb7vW5o", "_blank").opener = null} />
                    <div className="projectImgOverlay">
                        <FontAwesomeIcon icon={faNodeJs} size="3x" color="white" className="faIcon" />
                        <FontAwesomeIcon icon={faBootstrap} size="3x" color="white" className="faIcon" />
                        <img src="assets/mongodb.png" alt="mongodb" className="icon" />
                    </div>
                </div>

                <div className="projectDescription">
                    <h2>Buxry (2019)</h2>
                    <p>An iOS app that my team and I build for our mobile application course.
                        It is an application that allow user to buy and sell or rent furnitures.
                        The app is developed in Swift. The data is stored on Firebase NoSQL database.
                        Users are authenticated using Firebase Authentication.
                        <br />
                        <br />
                        I worked mostly on the backend part of the application. Creating the database, and user authentication.
                    </p>

                    <div className="iconsContainer">
                        <FontAwesomeIcon icon={faGithub} size="3x" color="white" className="faIcon"
                            onClick={() => window.open("https://github.com/mohamed-albgal/buxury", "_blank").opener = null} />
                        <FontAwesomeIcon icon={faYoutubeSquare} size="3x" color="white" className="faIcon"
                            onClick={() => window.open("https://www.youtube.com/watch?v=0j5vFb7vW5o", "_blank").opener = null} />
                    </div>
                </div>
            </div>

            <div className="projectsCarousel">
                <h2>Minor Projects</h2>
                <div className="arrowContainer">
                    <FontAwesomeIcon icon={faArrowLeft} onClick={() => slideLeft()} className="arrowIcon" />
                    <FontAwesomeIcon icon={faArrowRight} onClick={() => slideRight()} className="arrowIcon" />
                </div>

                <div className={activeItem === 1 ? "carouselItem active" : "carouselItem"}>
                    <h3>WebCT</h3>
                    <p>For fun project. A countdown timer/alarm for web browsing</p>
                    <FontAwesomeIcon icon={faGithub} size="3x" color="white" className="sp-icon"
                        onClick={() => window.open("https://github.com/chunsu2019/WebCT", "_blank").opener = null} />
                </div>

                <div className={activeItem === 2 ? "carouselItem active" : "carouselItem"}>
                    <h3>Calculator</h3>
                    <p>Frontend Mentor challenge</p>
                    <FontAwesomeIcon icon={faGithub} size="3x" color="white" className="sp-icon"
                        onClick={() => window.open("https://github.com/chunsu2019/FEM_Challenge-Calculator", "_blank").opener = null} />

                </div>
            </div>

        </section>
    )
}

export default Works;
