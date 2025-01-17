import PropTypes from "prop-types";

export default function Tag({ tag }) {
  return (
    <div className="tagContainer">
      <span className="tagButton">{tag}</span>
    </div>
  );
}

Tag.propTypes = {
  tag: PropTypes.string.isRequired,
};
