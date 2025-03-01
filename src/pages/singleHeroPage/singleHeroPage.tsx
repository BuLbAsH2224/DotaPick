import "./singleHeroPage.styles.css";
import { useParams } from "react-router-dom";
import { I_HeroStats } from "../../types";
import { getHeroStatsWithIdAPI } from "../../api";
import { useEffect, useState } from "react";
import { HeroFullComponent } from "../../components";

const SingleHeroPage = () => {
  const { id } = useParams();
  const [heroStats, setHeroStats] = useState<I_HeroStats | null>(null);
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
