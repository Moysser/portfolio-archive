import { useEffect, useState } from "react";
import Loader from "react-loaders";
import { Link } from "react-router-dom";
import LogoE from "../../assets/images/letterm.png";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import HomeImage from "./HomeImage/index";

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = "ysser, ".split("");
  const devArray = "Web Developer.".split("");

  useEffect(() => {
    const timerId = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);

    return () => {
      clearTimeout(timerId);
    };
  }, []);

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={`${letterClass} _8`}>H</span>
            <span className={`${letterClass} _9`}>i</span>
            <span className={`${letterClass} _9`}>!</span>
            <br />
            <span className={`${letterClass} _10`}>I</span>
            <span className={`${letterClass} _11`}>'m</span>
            <img src={LogoE} alt="React developer" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={12}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={devArray}
              idx={15}
            />
          </h1>
          <h2>Front-end | React | JavaScript Enthusiast</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <HomeImage className="Home" />
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Home;
