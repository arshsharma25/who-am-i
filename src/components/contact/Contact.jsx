import "./Contact.css"
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Address from "../../img/address.png"
import { useContext, useRef, useState } from "react"
import emailjs from "emailjs-com"
import { ThemeContext } from "../../context"


const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false);
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const handleSubmit = (e) => {
        e.preventDefault(); // it prevents refreshing the page

        emailjs.sendForm(
            'service_g7fe00o',
            'template_4ualgtk',
            formRef.current,
            'Jat50NFoIUBKfqLx_')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
    }

    return (
        <div className="c" id="contact">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">
                         Let's discuss your project
                    </h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img
                                src={Phone}
                                alt=""
                                className="c-icon" />
                            +1 778-988-3301
                        </div>
                        <div className="c-info-item">
                            <img
                                src={Email}
                                alt=""
                                className="c-icon" />
                            arshsharma96@yahoo.com
                        </div>
                        <div className="c-info-item">
                            <img
                                src={Address}
                                alt=""
                                className="c-icon" />
                            14262 72A Avenue
                         </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>What's your story? </b>
                        Get in touch. Ready for freelancing and working on challenging tasks.
                    </p> 
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{ backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
                        <input style={{ backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
                        <input style={{ backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
                        <textarea style={{ backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message" />
                        <button>Submit </button>
                        {done && "Thank You..."}
                    </form>
                </div>
            </div>
         </div>
     ) 
}
 
export default Contact