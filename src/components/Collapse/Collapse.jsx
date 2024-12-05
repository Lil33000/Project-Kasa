import Arrow from "../../assets/images/arrow_back.png";

export default function Collapse({ title, description }) {
  const [toogle, setToggle] = useState(false);

  return (
    <>
      <article className="collapse">
        <div onClick>
          <h2>{title}</h2>
          <img src={Arrow} alt="flêche" />
        </div>
        <div>{description}</div>
      </article>
    </>
  );
}
