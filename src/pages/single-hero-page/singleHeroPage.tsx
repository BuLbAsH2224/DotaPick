import "./single-hero-page.styles.css";
import { useParams } from "react-router-dom";
import { IHeroStats } from "../../types";
import { getHeroStatsWithIdAPI } from "../../api";
import React, { useEffect, useState } from "react";
import { HeroFullComponent } from "../../components";

const SingleHeroPage : React.FC = () => {
  const { id } = useParams();
  const [heroStats, setHeroStats] = useState<IHeroStats | null>(null);
  useEffect(() => {
    const getData = async () => {
      if (!id) return;
      const data = await getHeroStatsWithIdAPI(id);
      setHeroStats(data);
    };
    getData();
  }, []);
  return (
    <>{heroStats ? <HeroFullComponent hero={heroStats} /> : <p>notFound</p>}</>
  );
};

export { SingleHeroPage };
