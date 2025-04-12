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
    if (!heroAbilities) return;
    setHeroAbilitiesTalentsInfo(heroAbilities[`${hero.name}`]);
  }, [heroAbilities, hero]);
  return (
    <>
      <p className="abilityText">Способности</p>
      <div className="heroAbilitiesContainer">
        {heroDetailAbilities?.map((item: IAbility, ind) => {
          if (item.desc)
            return <AbiltiyPreviewComponent hero={hero} ability={item} key={ind} />;
        })}
      </div>
    </>
  );
};
