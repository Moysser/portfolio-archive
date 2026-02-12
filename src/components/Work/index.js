import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";
import { useEffect, useState } from "react";
import Loader from "react-loaders";
import Timeline from "./Timeline";
import SuiteCaseLogo from "./suitcase/index";

const Work = () => {
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
      <div className="container work-page">
        <h1 className="experience-primary">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={"Work Experience".split("")}
            idx={10}
          />
        </h1>
        <div className="text-zone">
          <Timeline />
        </div>
      </div>
      <SuiteCaseLogo />
      <Loader type="pacman" />
    </>
  );
};
export default Work;
