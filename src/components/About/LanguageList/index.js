import React, { useState } from "react";
import ProgressBar from "../ProgressBar";
import "./index.scss";

const LanguageList = () => {
  const [languages] = useState([
    {
      name: "JavaScript",
      progress: 100,
      className: "javaScript-progress",
      years: 4,
    },
    { name: "HTML/CSS", progress: 100, className: "web-progress", years: 4 },
    {
      name: "TypeScript",
      progress: 50,
      className: "type-progress",
      years: 1,
    },
  ]);

  return (
    <div>
      <h2>Languages & Core</h2>
      <ul>
        {languages.map((language, index) => (
          <li key={index}>
            <span>
              {language.name}: {`${language.years} years`}
            </span>
            <ProgressBar
              progress={language.progress}
              className={language.className}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguageList;
