import "./single-hero-page.styles.css";
import { useParams } from "react-router-dom";
import { IAbilities, IHeroAbilities, IHeroStats} from "../../types";
import React, { useEffect, useState } from "react";
import { HeroFullComponent } from "../../components";
import pudgeHook from "../../assets/pudgeHook.png";
import { getHeroStatsAPI } from "../../api";
import { useQuery } from "@tanstack/react-query";

interface ISingleHeroPageProps {
  heroAbilitiesData: IHeroAbilities | undefined;
  abilitiesData: IAbilities | undefined;
}

const SingleHeroPage: React.FC<ISingleHeroPageProps> = ({
  heroAbilitiesData,
  abilitiesData,
}) => {
  const { id } = useParams<{ id: string }>();
  const [heroStats, setHeroStats] = useState<IHeroStats | null>(null);
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const { data: heroStatsData } = useQuery<IHeroStats>({
    queryKey: ["abilitiesInfo", id],
    enabled: Boolean(id),
    queryFn: ({ queryKey }) => {
      const [, heroId] = queryKey as [string, string];
      return getHeroStatsAPI(heroId);
    },
  });

  useEffect(() => {
    if (!heroStatsData) return;
    console.log(heroStatsData);
    setHeroStats(heroStatsData);
  }, [heroStatsData]);

  return (
    <>
      <img src={pudgeHook} className="pudgeHookImg" alt="pudge hook" />
      {heroStats ? (
        <HeroFullComponent
          hero={heroStats}
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
