import PropTypes from "prop-types";
export default function Host({ name, picture, id }) {
  return (
    <aside className="host-comp">
      <div className="host-name">{name}</div>
      <div className="hostPicture">
        <img src={picture} alt={id} />
      </div>
    </aside>
  );
}
Host.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  id: PropTypes.number,
};
