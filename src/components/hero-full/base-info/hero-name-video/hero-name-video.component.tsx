import { IHeroStats } from "../../../../types";
import {
  getHeroAttributeImage,
  getHeroVideoUrlFromName,
} from "../../../../utils";
import "./hero-name-video.styles.css";
interface IHeroNameVideoProps {
  hero: IHeroStats;
}

export const HeroNameVideoComponent: React.FC<IHeroNameVideoProps> = ({
  hero,
}) => {
  return (
    <div className={`heroFullInfoAndVideoDiv heroAttr_${hero.primary_attr}`}>
      <div className="heroFullNameAndAttrDiv">
      <img
        src={getHeroAttributeImage(hero.primary_attr)}
        className="heroAttrFromNameAndVideo"
        alt="hero attr"
      />
        <p>{hero.localized_name}</p>
      </div>
      <video autoPlay loop muted playsInline className="heroFullVideo">
        <source src={getHeroVideoUrlFromName(hero.name)} type="video/webm" />
      </video>
    </div>
  );
};
