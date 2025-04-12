import "./single-hero-page.styles.css";
import { useParams } from "react-router-dom";
import { IAbilities, IHeroAbilities, IHeroStats, IItems } from "../../types";
import React, { useEffect, useState } from "react";
import { HeroFullComponent } from "../../components";
import { getOneHeroWithId } from "../../utils";
import pudgeHook from "../../assets/pudgeHook.png";

interface ISingleHeroPageProps {
  heroesStats: IHeroStats[] | undefined;
  items: IItems | undefined;
  heroAbilitiesData: IHeroAbilities | undefined;
  abilitiesData: IAbilities | undefined;
}

const SingleHeroPage: React.FC<ISingleHeroPageProps> = ({
  heroesStats,
  items,
  heroAbilitiesData,
  abilitiesData,
}) => {
  const { id } = useParams<{ id: string }>();
  const [heroStats, setHeroStats] = useState<IHeroStats | null>(null);

  useEffect(() => {
    if (!id || !heroesStats) return;
    const hero = getOneHeroWithId(heroesStats, parseInt(id));
    setHeroStats(hero);
  }, [id, heroesStats]);

  return (
    <>
      <img src={pudgeHook} className="pudgeHookImg" alt="pudge hook" />
      {heroStats ? (
        <HeroFullComponent
          hero={heroStats}
          items={items}
          heroAbilitiesData={heroAbilitiesData}
          abilitiesData={abilitiesData}
        />
      ) : (
        <p>notFound</p>
      )}
    </>
  );
};

export { SingleHeroPage };
