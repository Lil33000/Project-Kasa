import Arrow from "../../assets/images/arrow_back.png";
import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";

export default function Collapse({ title, description, style }) {
  const [toggle, setToggle] = useState(false);
  const [heightEl, setHeightEl] = useState();

  const toggleState = () => {
    setToggle(!toggle);
  };
  const refHeight = useRef();

  useEffect(() => {
    setHeightEl(`${refHeight.current.scrollHeight}px`);
  }, []);

  return (
    <div className={`collapse ${style}`}>
      <div onClick={toggleState} className="collapse__visible">
        <h2>{title}</h2>
        <img
          className={toggle ? "arrow rotated" : "arrow"}
          src={Arrow}
          alt="Arrow"
        />
      </div>
      <div
        ref={refHeight}
        className={toggle ? "collapse__toggle animated" : "collapse__toggle"}
        style={{ height: toggle ? `${heightEl}` : "0px" }}
      >
        <p aria-hidden={toggle ? "true" : "false"}>{description}</p>
      </div>
    </div>
  );
}

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  style: PropTypes.string,
};
