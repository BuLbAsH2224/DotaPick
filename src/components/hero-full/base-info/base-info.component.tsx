import { useQuery } from "@tanstack/react-query";
import { IAbilityFromApi, IHeroStats } from "../../../types";
import { AbilitiesComponent } from "./abilities";
import { BaseAttributesComponent } from "./base-attributes";
import { BaseHpManaComponent } from "./base-hp-mana";
import "./base-info.styles.css";
import { HeroNameVideoComponent } from "./hero-name-video";
import { getHeroAbilities } from "../../../api";
import { Loader } from "../../loader";
interface IBaseInfoProps {
  hero: IHeroStats;
}

export const BaseInfoComponent: React.FC<IBaseInfoProps> = ({ hero }) => {
  const { data: heroAbilitiesData } = useQuery<IAbilityFromApi>({
    queryKey: ["heroAbilities", hero.id],
    queryFn: () => getHeroAbilities(hero.name),
  });

  return (
    <div className="heroFullBaseInfoDiv">
      <div className="BaseInfoDiv">
        {heroAbilitiesData ? (
          <AbilitiesComponent abilitiesAllInfo={heroAbilitiesData} />
        ) : (
          <Loader />
        )}
        <BaseHpManaComponent hero={hero} />
        <BaseAttributesComponent hero={hero} />
      </div>
      <HeroNameVideoComponent hero={hero} />
    </div>
  );
};
