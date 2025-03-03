import { IHeroStats } from "../../types";

import "./hero-full.styles.css";
import { getHeroImageUrlFromName, getHeroVideoUrlFromName } from "../../utils";

interface IheroFullProps {
  hero: IHeroStats;
}

export const HeroFullComponent: React.FC<IheroFullProps> = ({ hero }) => {
  return (
    <div className="heroFullDiv">
      <video autoPlay loop muted playsInline className="heroFullVideo">
        <source
          src={getHeroVideoUrlFromName(hero.name)}
          type="video/webm"
        />
      </video>
      <img src={getHeroImageUrlFromName(hero.name)} className="heroPreviewImg" />
      <p>{hero.localized_name}</p>
    </div>
  );
};
