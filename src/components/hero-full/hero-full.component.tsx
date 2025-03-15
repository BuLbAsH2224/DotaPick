import {
  IHeroPopularItems,
  IHeroPopularItemsID,
  IHeroStats,
  IItem,
  IItems,
} from "../../types";
import { BaseInfoComponent } from "./base-info/base-info.component";
import { useEffect, useState } from "react";
import "./hero-full.styles.css";
import { useQuery } from "@tanstack/react-query";
import { getHeroPopularItems } from "../../api";
import { PopularItemsComponent } from "./popular-items";

interface IHeroFullProps {
  hero: IHeroStats;
  items: IItems | undefined;
}

export const HeroFullComponent: React.FC<IHeroFullProps> = ({
  hero,
  items,
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const [popularItems, setPopularItems] = useState<IHeroPopularItems | null>(
    null
  );

  const { data: heroPopularItemsData } = useQuery<IHeroPopularItemsID>({
    queryKey: ["heroPopularItems", hero.id],
    queryFn: () => getHeroPopularItems(hero.id),
  });

  useEffect(() => {
    if (!heroPopularItemsData || !items) return;
    const allItemsID = Object.values(items);
    
    const getItemsFromIds = (itemsData: { [key: string]: number }) => {
      return Object.keys(itemsData)
        .map((itemId) => allItemsID.find((item) => item.id === Number(itemId)))
        .filter((item): item is IItem => item !== undefined);
    };

    setPopularItems({
      start_game_items: getItemsFromIds(heroPopularItemsData.start_game_items),
      early_game_items: getItemsFromIds(heroPopularItemsData.early_game_items),
      mid_game_items: getItemsFromIds(heroPopularItemsData.mid_game_items),
      late_game_items: getItemsFromIds(heroPopularItemsData.late_game_items),
    });
  }, [heroPopularItemsData, items]);

  return (
    <div className="heroFullCompDiv">
      <BaseInfoComponent hero={hero} />
      {popularItems ? (
        <PopularItemsComponent popularItems={popularItems} />
      ) : (
        <p className="loadingText">Loading..</p>
      )}
    </div>
  );
};
