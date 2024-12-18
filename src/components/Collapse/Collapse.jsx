import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import Arrow from "../../assets/images/arrow_back.png";

export default function Collapse({ title, description, style }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const contentHeight = useRef("0px");

  useEffect(() => {
    if (contentRef.current) {
      contentHeight.current = `${contentRef.current.scrollHeight}px`;
    }
  }, []);

  const handleToggle = () => {
    setIsOpen((prevOpen) => !prevOpen);
  };

  return (
    <div className={`collapse ${style}`}>
      <div onClick={handleToggle} className="collapse__visible">
        <h2>{title}</h2>
        <img
          className={isOpen ? "arrow rotated" : "arrow"}
          src={Arrow}
          alt="Arrow"
        />
      </div>
      <div
        ref={contentRef}
        className={isOpen ? "collapse__toggle animated" : "collapse__toggle"}
        style={{
          height:
            isOpen && contentRef.current
              ? `${contentRef.current.scrollHeight}px`
              : "0px",
        }}
      >
        <p aria-hidden={!isOpen}>{description}</p>
      </div>
    </div>
  );
}

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  style: PropTypes.string,
};
