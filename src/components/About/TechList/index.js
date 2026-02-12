import React, { useState } from "react";
import ProgressBar from "../ProgressBar";
import "./index.scss";

const TechList = () => {
  const [techs] = useState([
    { name: "ReactJS", progress: 100, className: "react-progress", years: 3 },

    {
      name: "Tailwind/Sass",
      progress: 50,
      className: "Tailwind-progress",
      years: 1,
    },

    {
      name: "MaterialUI/FontAwesome",
      progress: 50,
      className: "MaterialUI-progress",
      years: 1,
    },
    { name: "NodeJS", progress: 50, className: "node-progress", years: 1 },
    {
      name: "Mailchimp",
      progress: 50,
      className: "Mailchimp-progress",
      years: 1,
    },
  ]);

  return (
    <div>
      <h2>Frameworks & Technologies</h2>
      <ul>
        {techs.map((tech, index) => (
          <li key={index}>
            <span>
              {tech.name}: {`${tech.years} years`}
            </span>
            <ProgressBar progress={tech.progress} className={tech.className} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TechList;
