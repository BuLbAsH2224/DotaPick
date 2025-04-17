import { IAbilities, IHeroAbilities, IHeroStats } from "../../../types";
import { AbiltiesComponent } from "./abilities";
import { BaseAttributesComponent } from "./base-attributes";
import { BaseHpManaComponent } from "./base-hp-mana";
import "./base-info.styles.css";
import { HeroNameVideoComponent } from "./hero-name-video";
interface IBaseInfoProps {
  hero: IHeroStats;
  abilities: IAbilities | undefined;
  heroAbilities: IHeroAbilities | undefined;
}

export const BaseInfoComponent: React.FC<IBaseInfoProps> = ({ hero,abilities,heroAbilities }) => {
  return (
    <div className="heroFullBaseInfoDiv">
      <div className="BaseInfoDiv">
        <AbiltiesComponent hero={hero} abilities={abilities} heroAbilities={heroAbilities}/>
        <BaseHpManaComponent hero={hero} />
        <BaseAttributesComponent hero={hero} />
      </div>
      <HeroNameVideoComponent hero={hero} />
    </div>
  );
};
