import { useEffect, useState } from "react";
import {
  IAbilities,
  IAbility,
  IHeroAbilities,
  IHeroAbilityData,
  IHeroStats,
} from "../../../../types";
import "./abilities.styles.css";
import { AbiltiyPreviewComponent } from "./ability-preview";

interface IAbiltiesProps {
  hero: IHeroStats;
  abilities: IAbilities | undefined;
  heroAbilities: IHeroAbilities | undefined;
}

export const AbiltiesComponent: React.FC<IAbiltiesProps> = ({
  hero,
  abilities,
  heroAbilities,
}) => {
  const [heroInnateCm, setHeroInnateCm] = useState<IAbility | undefined>(
    undefined
  );
  const [heroAbilitiesTalentsInfo, setHeroAbilitiesTalentsInfo] =
    useState<IHeroAbilityData | null>(null);
  const [heroDetailAbilities, setHeroDetailAbilities] = useState<
    IAbility[] | null
  >(null);
  useEffect(() => {
    if (!heroAbilities || !heroAbilitiesTalentsInfo || !abilities) return;
    
    const detailAbilities: IAbility[] = [
      ...heroAbilitiesTalentsInfo.abilities.map(
        (item: string) => abilities[`${item}`]
      ),
    ];
    setHeroDetailAbilities(detailAbilities);
  }, [heroAbilitiesTalentsInfo, abilities, heroAbilities]);
  useEffect(() => {
    if (!heroDetailAbilities) return;
    setHeroInnateCm(
      heroDetailAbilities.find((item: IAbility) => item.is_innate)
    );
  }, [heroDetailAbilities]);
  useEffect(() => {
    if (!heroAbilities) return;
    setHeroAbilitiesTalentsInfo(heroAbilities[`${hero.name}`]);
  }, [heroAbilities, hero]);
  return (
    <>
      <div className="heroAbilitiesContainer">
        {heroInnateCm ? (
          <AbiltiyPreviewComponent hero={hero} ability={heroInnateCm} />
        ) : null}
        {heroDetailAbilities ? (
          heroDetailAbilities.map((item: IAbility, ind) => {
            if (item.desc && !item.is_innate)
              return (
                <AbiltiyPreviewComponent hero={hero} ability={item} key={ind} />
              );
          })
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};
