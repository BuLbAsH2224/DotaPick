import { IHeroStats } from "../../types";
import { getHeroImageUrlFromName } from "../../utils";
import { BaseInfoComponent } from "./base-info/base-info.component";
import "./hero-full.styles.css"

interface IheroFullProps {
  hero: IHeroStats;
}

export const HeroFullComponent: React.FC<IheroFullProps> = ({ hero }) => {
  return (
    <div className="heroFullCompDiv">
      <BaseInfoComponent hero={hero}/>
      <img
        src={getHeroImageUrlFromName(hero.name)}
        className="heroPreviewImg"
      />
    </div>
  );
};
