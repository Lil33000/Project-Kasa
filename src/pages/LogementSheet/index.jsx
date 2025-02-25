import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Carrousel from "../../components/Carrousel/Carrousel";
import Collapse from "../../components/Collapse/Collapse";
import Host from "../../components/Host/Host";
import Rate from "../../components/Rate/Rate";
import Tag from "../../components/Tag/Tag";
import axios from "axios";

export default function LogementSheet() {
  const params = useParams();
  const navigate = useNavigate();
  const [pickedAppart, setPickedAppart] = useState();

  useEffect(() => {
    const getData = async () => {
      const reponce = await axios.get("/logement.json");
      const picked = reponce.data.find(({ id }) => id === params.id);
      reponce.data.map(() => setPickedAppart(picked));
      if (picked === undefined) {
        navigate("/404", { state: { message: "Erreur" } });
      }
    };
    getData();
  });

  const slidePics = pickedAppart && pickedAppart.pictures;
  const tags = pickedAppart && pickedAppart.tags;
  const equipments = pickedAppart && pickedAppart.equipments;
  const equip =
    pickedAppart &&
    equipments.map((item, index) => <li key={index}>{item}</li>);
  return (
    pickedAppart && (
      <div key={params.id} className="fiche-container">
        <Carrousel slides={slidePics} />
        <section className="hostInfo-container">
          <div className="title-tags-container">
            <div className="title-container ">
              <h1 className="redFont">{pickedAppart.title}</h1>
              <h3>{pickedAppart.location}</h3>
            </div>
            <div className="tags-container">
              {tags.map((tag) => (
                <Tag key={tag} tag={tag} />
              ))}
            </div>
          </div>
          <div className="rate-host-container">
            <div className="host-container redFont">
              <Host
                name={pickedAppart.host.name}
                picture={pickedAppart.host.picture}
              />
            </div>
            <div className="rate-container">
              <Rate score={pickedAppart.rating} />
            </div>
          </div>
        </section>
        <div className="collapse-fiche-container">
          <Collapse
            title="Description"
            description={pickedAppart.description}
          />
          <Collapse title="Équipements" description={equip} />
        </div>
      </div>
    )
  );
}
