import "./index.scss";
import AnimatedLetters from "../../AnimatedLetters";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNode,
  faMailchimp,
  faFontAwesome,
  faSass,
  faFigma,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import Loader from "react-loaders";
import TechList from "../TechList";

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
            With an average of 4 years of experience, I am a Front-end developer
            with expertise in HTML, CSS, JavaScript, TypeScript, Tailwind CSS,
            React, Next.js, Git, GitHub, and much more.
            <br />
            <TechList />
            <Link to="/about" className="flat-button">
              LANGUAGES
            </Link>
            <br />
            <Link to="/about/dev" className="flat-button">
              DEVELOPMENT TOOLS
            </Link>
          </p>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faMailchimp} />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faFigma} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faFontAwesome} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faNode} color="#ffd700" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faSass} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};
export default About;
