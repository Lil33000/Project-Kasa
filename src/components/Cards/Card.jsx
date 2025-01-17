import PropTypes from "prop-types";

export default function Card({ cover, title }) {
  return (
    <article className="card-logement">
      <img src={cover} alt="location" />
      <div className="card-logement__layer">
        <p className="card-logement__title">{title}</p>
      </div>
    </article>
  );
}

Card.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
