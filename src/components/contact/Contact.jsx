import "./contact.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faGoogle } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
    return (
        <div className="contact" id="contact">
            <h1>Contact</h1>

            <div className="formContainer">
                <form action="https://formsubmit.co/78a6e63f56b405557fb9223f378545c3" method="POST">
                    <p>My inbox is always open. Please free to contact me for anything! I will try my best to get back to you as soon as possible.</p>
                    <input type="text" placeholder="Subject" name="subject" required />
                    <input type="email" placeholder="Email" name="email" required />
                    <textarea placeholder="Message" name="message"></textarea>

                    <input type="hidden" name="_next" value={"http://chunyou-s.com"} />
                    <input type="hidden" name="_captcha" value={"false"} />
                    <input type="text" name="_honey" style={{ display: "none" }} />

                    <button type="submit" className="submitButton">Send</button>
                </form>
            </div>

            <div className="contactFooter">
                <FontAwesomeIcon icon={faGithub} size="3x" color="white" className="faIcon"
                    onClick={() => window.open("https://github.com/chunsu2019", "_blank")}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faLinkedin} size="3x" color="white" className="faIcon"
                    onClick={() => window.open("https://www.linkedin.com/in/chunyou-su-5b686a233/", "_blank")}></FontAwesomeIcon>

                <FontAwesomeIcon icon={faGoogle} size="3x" color="white" className="faIcon"
                    onClick={() => window.open("mailto:chunyousu.we@gmail.com?subject = Feedback&body = Message")}></FontAwesomeIcon>
            </div>
        </div>
    )
}

export default Contact;