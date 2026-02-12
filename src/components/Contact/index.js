import Loader from "react-loaders";
import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const refForm = useRef();

  useEffect(() => {
    const timerId = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);

    return () => {
      clearTimeout(timerId);
    };
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    // Initialize EmailJS once (usually in your App component or here)
    emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);

    // Send the form
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        refForm.current,
      )
      .then(
        () => {
          alert(
            "Thank you for your message! I’ll get back to you within 1–2 business days",
          );
          window.location.reload(false);
        },
        () => {
          alert("Failed to send the message, please try again");
        },
      );
  };

  return (
    <>
      <div className="form-container">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={`${letterClass} animated`}
              strArray={"Contact me".split("")}
              idx={15}
            />
          </h1>
          <div className="contact-flex">
            <div className="left-side">
              <p>Thank you for your interest in getting in touch!</p>
              <p>
                I value open communication and welcome any inquiries, feedback,
                or collaboration opportunities. Please don't hesitate to get in
                touch with me by filling out the contact form.
                <br />
                <br />
              </p>

              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/moysser-aziz-6696b41b3/"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="icon"
                  color="#4d4d4e"
                />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="mailto:moysseraziz@gmail.com"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="icon"
                  color="#4d4d4e"
                />
              </a>
            </div>

            <div className="right-side">
              <div className="contact-form">
                <form ref={refForm} onSubmit={sendEmail}>
                  <ul>
                    <li className="half">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your name"
                        required
                      />
                    </li>

                    <li className="half">
                      <input
                        type="email"
                        name="email"
                        placeholder="Your email"
                        required
                      />
                    </li>

                    <li>
                      <input
                        placeholder="Let me know how can I help you?"
                        type="text"
                        name="subject"
                        required
                      />
                    </li>

                    <li>
                      <textarea
                        placeholder="Say something nice :)"
                        name="message"
                        required
                      ></textarea>
                    </li>

                    <li>
                      <input
                        type="submit"
                        className="flat-button"
                        value="SEND"
                      />
                    </li>
                  </ul>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Contact;
