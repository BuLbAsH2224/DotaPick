import { useEffect, useState } from "react";
import { getHeroesStatsAPI } from "../../api";
import { I_HeroStats } from "../../types";
import {
  HeroPreviewComponent,
} from "../../components";

const MainPage = () => {
  const [heroStats, setHeroStats] = useState<I_HeroStats[]>([]);
  useEffect(() => {
    const getData = async () => {
      const data = await getHeroesStatsAPI();
      setHeroStats(data);
    };
    getData();
  }, []);
  return (
    <>
        <div className="heroPreviewsDiv">
          {heroStats.map((item) => {
            return <HeroPreviewComponent hero={item} />;
          })}
        </div>
    </>
  );
}

export {MainPage};
