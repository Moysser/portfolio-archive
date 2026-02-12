import React, { useState } from "react";
import "./index.scss";

const Timeline = () => {
  const [events, setEvents] = useState([
    {
      date: "May 2020 – Present",
      title: "Freelance Web Developer",
      description: [
        "Designed and developed responsive websites using <b>HTML5, CSS3, JavaScript (ES6+)</b>, and modern front-end frameworks like <b>React.js & Redux</b>, Worked with <b> utility-first CSS frameworks like Tailwind and CSS preprocessors like SASS/SCSS</b> to write modular and maintainable stylesheets. Implemented interactive user interfaces with dynamic content using JavaScript and third-party libraries",
        "Ensured <b>cross-browser</b> compatibility and optimized the <b>mobile-first design</b> for a seamless experience across devices.",
        "Integrated <b>APIs</b> and external libraries to enhance the functionality of websites (e.g., forms, image galleries, data fetching).Deployed and maintained websites using platforms like <b>GitHub Pages and Vercel.</b>",
      ],
      expanded: false,
    },
  ]);

  const handleItemClick = (index) => {
    setEvents((prevEvents) => {
      const updatedEvents = prevEvents.map((event, idx) => {
        if (idx === index) {
          return { ...event, expanded: !event.expanded };
        }
        return event;
      });
      return updatedEvents;
    });
  };

  return (
    <div className="timeline-container">
      {events.map((event, index) => (
        <div
          className={`timeline-item ${event.expanded ? "expanded" : ""}`}
          key={index}
          onClick={() => handleItemClick(index)}
        >
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <h2>{event.title}</h2>
            {event.expanded ? (
              <div>
                {event.description.map((desc, descIndex) => (
                  <p
                    style={{ color: "#fff" }}
                    key={descIndex}
                    dangerouslySetInnerHTML={{ __html: desc }}
                  />
                ))}
              </div>
            ) : (
              <>
                <div className="more">
                  <p style={{ color: "#fff" }}>Click for more</p>
                </div>
                <div className="date">{event.date}</div>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
