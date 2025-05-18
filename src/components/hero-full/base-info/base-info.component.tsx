import { useQuery } from "@tanstack/react-query";
import { IAbilityFromApi, IAspect, IHeroStats } from "../../../types";
import { AbilitiesComponent } from "./abilities";
import { BaseAttributesComponent } from "./base-attributes";
import { BaseHpManaComponent } from "./base-hp-mana";
import "./base-info.styles.css";
import { HeroNameVideoComponent } from "./hero-name-video";
import { getHeroAbilities } from "../../../api";
import { Loader } from "../../loader";
import { AspectComponent } from "./aspect";
import { HeroIndicators } from "./hero-indicators";
interface IBaseInfoProps {
  hero: IHeroStats;
}

export const BaseInfoComponent: React.FC<IBaseInfoProps> = ({ hero }) => {
  const { data: heroAbilitiesData } = useQuery<IAbilityFromApi>({
    queryKey: ["heroAbilities", hero.id],
    queryFn: () => getHeroAbilities(hero.name),
  });
  console.log(heroAbilitiesData)
  return (
    <div className="heroFullBaseInfoDiv">
      <div className="BaseInfoDiv">
        {heroAbilitiesData ? (
          <AbilitiesComponent abilitiesAllInfo={heroAbilitiesData} />
        ) : (
          <Loader />
        )}
        <div className="aspectsContainer">
          {heroAbilitiesData ? (
            heroAbilitiesData.aspects.map((item: IAspect) => (
              <AspectComponent aspect={item} key={item.id} />
            ))
          ) : (
            <Loader />
          )}
        </div>
        <BaseHpManaComponent hero={hero} />
        <BaseAttributesComponent hero={hero} />
      </div>
      <div className="heroNameAndIndicators">
        <HeroNameVideoComponent hero={hero} />
        <HeroIndicators hero={hero} />
      </div>
    </div>
  );
};
