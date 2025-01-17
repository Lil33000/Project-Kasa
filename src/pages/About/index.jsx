import BannerAbout from "../../components/BannerAbout/BannerAbout";
import Collapse from "../../components/Collapse/Collapse";
import dataAbout from "../../data/dataAbout";

export default function About() {
  return (
    <>
      <BannerAbout />
      {dataAbout.map((about, id) => (
        <Collapse
          key={id}
          title={about.title}
          description={about.description}
        />
      ))}
    </>
  );
}
