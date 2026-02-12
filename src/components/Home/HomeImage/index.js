import plane from "../../../assets/images/plane.gif";
import "./index.scss";

const HomeImage = () => {
  return (
    <div className="home-image-container">
      <img className="animate" src={plane} alt="React, Developer, plane" />
    </div>
  );
};

export default HomeImage;
