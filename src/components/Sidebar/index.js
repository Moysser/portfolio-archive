import "./index.scss";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faEnvelope,
  faSuitcase,
  faFolderOpen,
  faBars,
  faClose,
  faCloudArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/images/moi.png";

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={logo} alt="logo" />
      </Link>
      <nav className={showNav ? "mobile-show" : ""}>
        <NavLink
          exact="true"
          activeclassname="active"
          to="/"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faHome} color="#2b2ba8" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faUser} color="#2b2ba8" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="work-link"
          to="/work"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faSuitcase} color="#2b2ba8" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="portfolio-link"
          to="/portfolio"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faFolderOpen} color="#2b2ba8" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faEnvelope} color="#2b2ba8" />
        </NavLink>
        <FontAwesomeIcon
          icon={faClose}
          color="#ffd700"
          size="3x"
          className="close-icon"
          onClick={() => setShowNav(false)}
        />
      </nav>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/moysser-aziz-6696b41b3/"
          >
            <FontAwesomeIcon size="xl" icon={faLinkedin} color="#3333a2" />
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="https://github.com/moysser">
            <FontAwesomeIcon size="xl" icon={faGithub} color="#3333a2" />
          </a>
        </li>
        <li>
          <a
            href="/resume.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="resume-btn"
          >
            <FontAwesomeIcon
              size="xl"
              icon={faCloudArrowDown}
              color="#3333a2"
            />
          </a>
        </li>
      </ul>
      <FontAwesomeIcon
        onClick={() => setShowNav(true)}
        icon={faBars}
        color="#ffd700"
        size="3x"
        className="hamburger-icon"
      />
    </div>
  );
};

export default Sidebar;
