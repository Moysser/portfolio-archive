import "./index.scss";
import AnimatedLetters from "../../AnimatedLetters";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFonticons,
  faGit,
  faStackOverflow,
  faNpm,
  faLinux,
} from "@fortawesome/free-brands-svg-icons";
import Loader from "react-loaders";
import DevList from "../DevList";

const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    const timerId = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);

    return () => {
      clearTimeout(timerId);
    };
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={"About me".split("")}
              idx={15}
            />
          </h1>
          <p>
            I’m a self-taught front-end developer focused on React. I build
            responsive, user-focused web applications, integrate APIs, and write
            clean, maintainable code. I enjoy learning in team environments,
            improving through feedback, and tackling real projects to
            continuously grow my skills.
            <br />
            <DevList />
            <Link to="/about" className="flat-button">
              LANGUAGES
            </Link>
            <br />
            <Link to="/about/tech" className="flat-button">
              FRAMEWORKS/TECHNOLOGIES
            </Link>
          </p>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faLinux} />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faFonticons} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faNpm} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faStackOverflow} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faGithub} color="#ffd700" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGit} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};
export default About;
