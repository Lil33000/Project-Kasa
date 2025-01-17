import emptyStar from "../../assets/images/star-inactive.png";
import fullStar from "../../assets/images/star_active.png";
import PropTypes from "prop-types";

export default function Rate({ score }) {
  const stars = [1, 2, 3, 4, 5];
  return (
    <div className="rate-comp">
      {stars.map((level) =>
        score >= level ? (
          <img
            key={level.toString()}
            className="star"
            src={fullStar}
            alt="rating star"
          />
        ) : (
          <img
            key={level.toString()}
            className="star"
            src={emptyStar}
            alt="rating star"
          />
        )
      )}
    </div>
  );
}

Rate.propTypes = {
  score: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};
