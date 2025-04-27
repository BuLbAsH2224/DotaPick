import "./single-hero-page.styles.css";
import { useParams } from "react-router-dom";
import { IHeroStats } from "../../types";
import React, { useEffect } from "react";
import { HeroFullComponent } from "../../components";
import pudgeHook from "../../assets/pudgeHook.png";
import { getHeroStatsAPI } from "../../api";
import { useQuery } from "@tanstack/react-query";

const SingleHeroPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
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

  return (
    <>
      <img src={pudgeHook} className="pudgeHookImg" alt="pudge hook" />
      {heroStatsData ? (
        <HeroFullComponent hero={heroStatsData} />
      ) : (
        <p>notFound</p>
      )}
    </>
  );
};

export { SingleHeroPage };
