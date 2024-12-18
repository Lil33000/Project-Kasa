import PropTypes from "prop-types";
export default function Host({ hostName, hostPic, id }) {
  return (
    <aside className="host-comp">
      <div className="host-name">{hostName}</div>
      <div className="hostPicture">
        <img src={hostPic} alt={id} />
      </div>
    </aside>
  );
}
Host.propTypes = {
  hostName: PropTypes.string.isRequired,
  hostPic: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
