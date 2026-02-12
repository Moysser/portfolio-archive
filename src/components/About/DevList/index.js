import React, { useState } from "react";
import ProgressBar from "../ProgressBar";
import "./index.scss";

const TechList = () => {
  const [devs] = useState([
    {
      name: "Git & Github",
      progress: 100,
      className: "github-progress",
      years: 4,
    },
    {
      name: "parcel/Vit",
      progress: 75,
      className: "dev-progress",
      years: 2,
    },
    { name: "Postman", progress: 50, className: "postman-progress", years: 1 },
  ]);

  return (
    <div>
      <h2>Development Tools</h2>
      <ul>
        {devs.map((dev, index) => (
          <li key={index}>
            <span>
              {dev.name}: {`${dev.years} years`}
            </span>
            <ProgressBar progress={dev.progress} className={dev.className} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TechList;
