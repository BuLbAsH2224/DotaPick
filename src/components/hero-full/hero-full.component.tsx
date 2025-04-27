import {
  IAbilities,
  IHeroAbilities,
  IHeroPopularItems,
  IHeroStats,
} from "../../types";
import { BaseInfoComponent } from "./base-info/base-info.component";
import "./hero-full.styles.css";
import { useQuery } from "@tanstack/react-query";
import { getHeroPopularItems } from "../../api";
import { PopularItemsComponent } from "./popular-items";
import { Loader } from "../loader";
interface IHeroFullProps {
  hero: IHeroStats;
  abilitiesData: IAbilities | undefined;
  heroAbilitiesData: IHeroAbilities | undefined;
}

export const HeroFullComponent: React.FC<IHeroFullProps> = ({
  hero,
  abilitiesData,
  heroAbilitiesData,
}) => {


  const { data: heroPopularItemsData } = useQuery<IHeroPopularItems>({
    queryKey: ["heroPopularItems", hero.id],
    queryFn: () => getHeroPopularItems(hero.id),
  });

  return (
    <div className="heroFullCompDiv">
      <BaseInfoComponent
        hero={hero}
        heroAbilities={heroAbilitiesData}
        abilities={abilitiesData}
      />
      {heroPopularItemsData ? (
        <PopularItemsComponent popularItems={heroPopularItemsData} />
      ) : (
        <Loader/>
      )}
    </div>
  );
};
