import { useEffect, useState } from "react";
import { getHeroesStatsAPI } from "../../api";
import { I_HeroPreview } from "../../types";
import {
  HeroPreviewComponent,
} from "../../components";
import "./mainPage.styles.css"

const MainPage = () => {
  const [heroesStats, setHeroesStats] = useState<I_HeroPreview[]>([]);
  useEffect(() => {
    const getData = async () => {
      const data = await getHeroesStatsAPI();
      setHeroesStats(data);
    };
    getData();
  }, []);
  return (
    <>
        <div className="heroPreviewsDiv">
          {heroesStats.map((item) => {
            return <HeroPreviewComponent hero={item} />;
          })}
        </div>
    </>
  );
}

export {MainPage};
