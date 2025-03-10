import { IHeroStats } from "../../../types";
import { BaseAttributesComponent } from "./base-attributes";
import { BaseHpManaComponent } from "./base-hp-mana";
import "./base-info.styles.css";
import { HeroNameVideoComponent } from "./hero-name-video";
interface IBaseInfoProps {
  hero: IHeroStats;
}

export const BaseInfoComponent: React.FC<IBaseInfoProps> = ({ hero }) => {
  return (
    <div className="heroFullBaseInfoDiv">
        <div className="BaseInfoDiv">
        <BaseHpManaComponent hero={hero} />
        <BaseAttributesComponent hero={hero} />
      </div>
      <HeroNameVideoComponent hero={hero} />
    </div>
  );
};
