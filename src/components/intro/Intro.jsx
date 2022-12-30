import "./Intro.css";
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {FaTwitterSquare} from "react-icons/fa";
import {SiLeetcode} from "react-icons/si";



const repeatAnimation = () => {
    const dataText = ["I'm a Full Stack Developer.", "I'm a Web Developer.", "I'm a Software Developer."];

    function typeWriter(text, i, fnCallback) {
        // check if text isn't finished yet
        if (i < (text.length)) {
            // add next character to h1
            document.getElementById("i-repeat").innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

            // wait for a while and call this function again for next character
            setTimeout(function () {
                typeWriter(text, i + 1, fnCallback)
            }, 100);
        }
        // text finished, call callback if there is a callback function
        else if (typeof fnCallback == 'function') {
            // call callback after timeout
            setTimeout(fnCallback, 700);
        }
    }

    // start a typewriter animation for a text in the dataText array
    function StartTextAnimation(i) {
        if (typeof dataText[i] == 'undefined') {
            setTimeout(function () {
                StartTextAnimation(0);
            }, 20000);
        }
        // check if dataText[i] exists
        if (i < dataText[i].length) {
            // text exists! start typewriter animation
            typeWriter(dataText[i], 0, function () {
                // after callback (and whole text has been animated), start next text
                StartTextAnimation(i + 1);
            });
        }
    }

    // start the text animation
    StartTextAnimation(0);
}

const Intro = () => {
    return (
        <div className="i" id="intro">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello &#128075;</h2>
                    <h2 className="i-name">My name is <strong>Arsh Sharma</strong></h2>
                    {/*<h3 id="i-repeat">{repeatAnimation()}</h3>*/}
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">WEB APP DEVELOPMENT</div>
                            <div className="i-title-item">FULL STACK DEV</div>
                            <div className="i-title-item">DEVOPS</div>
                            <div className="i-title-item">AUTOMATION</div>
                            <div className="i-title-item">TECH ENTHUSIAST</div>
                        </div>
                    </div>
                    <div className="i-desc">
                        <p>
                            I am a recent graduate of Douglas College's Post Baccalaureate Diploma in Computing &
                            Information Systems program, with a specialization in Emerging Technologies and web
                            technologies.
                            I have a strong foundation in programming languages such as Python, Java, and SQL, as well
                            as experience with frameworks like Flask and React.
                            I am proficient in DevOps tools like Git, GitHub, Docker, and Jenkins, and have a working
                            knowledge of platforms like Linux and MacOS.
                        </p>
                    </div>
                    <div className="i-icon-wrapper">
                        <FaLinkedin className="i-icon"/>
                        <FaTwitterSquare className="i-icon"/>
                        <FaGithub className="i-icon"/>
                        <SiLeetcode className="i-icon"/>
                    </div>
                    <div className="i-button-wrapper">
                        <button className={"i-button"}>Download CV</button>
                        <button className={"i-button"}>Contact Me</button>
                    </div>
                </div>

            </div>
            <div className="i-right">
                {/*<div className="i-bg"></div>*/}
                {/*<img src={ Me } alt="" className="i-img" />*/}
            </div>
        </div>
    )
}


export default Intro