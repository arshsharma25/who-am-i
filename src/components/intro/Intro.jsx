import "./Intro.css" 
import Me from "../../img/me.png"

const Intro = () => {
    return (
        <div className="i" id="intro">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, my name is</h2>
                    <h1 className="i-name">Arsh Sharma</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">UI/UX Designer</div>
                            <div className="i-title-item">Photographer</div>
                            <div className="i-title-item">Writer</div>
                            <div className="i-title-item">Content Creator</div> 
                        </div>
                    </div>
                    <div className="i-desc">
                        <p>
                        I am a recent graduate of Douglas College's Post Baccalaureate Diploma in Computing & Information Systems program, with a specialization in Emerging Technologies and web technologies.
                        I have a strong foundation in programming languages such as Python, Java, and SQL, as well as experience with frameworks like Flask and React.
                        I am proficient in DevOps tools like Git, GitHub, Docker, and Jenkins, and have a working knowledge of platforms like Linux and MacOS.
                        </p>
                    </div>
                </div>
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={ Me } alt="" className="i-img" />
            </div>
        </div>
    )
}

export default Intro