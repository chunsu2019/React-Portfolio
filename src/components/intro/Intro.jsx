import "./intro.scss";

const Intro = () => {
    return (
        <section className="intro" id="home">
            <div className="introContainer">
                <p>Hey Welcome! 👋</p>
                <p>My name is <span>Chunyou Su</span></p>
                <p>I am a Web Developer</p>
                <a href="#about"><button className="exploreButton">Learn more</button></a>
            </div>
        </section>
    )
}

export default Intro