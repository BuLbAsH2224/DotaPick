import { IHeroPopularItems, IHeroStats } from "../../types";
import { BaseInfoComponent } from "./base-info/base-info.component";
import "./hero-full.styles.css";
import { useQuery } from "@tanstack/react-query";
import { getHeroPopularItems } from "../../api";
import { PopularItemsComponent } from "./popular-items";
import { Loader } from "../loader";
interface IHeroFullProps {
  hero: IHeroStats;
}

export const HeroFullComponent: React.FC<IHeroFullProps> = ({ hero }) => {
  const { data: heroPopularItemsData } = useQuery<IHeroPopularItems>({
    queryKey: ["heroPopularItems", hero.id],
    queryFn: () => getHeroPopularItems(hero.id),
  });
  return (
    <div className="heroFullCompDiv">
      <BaseInfoComponent hero={hero} />
      {heroPopularItemsData ? (
        <PopularItemsComponent popularItems={heroPopularItemsData} />
      ) : (
        <Loader />
      )}
    </div>
  );
};
