import { useEffect, useState } from "react";
import { getHeroesStatsAPI } from "../../api";
import { I_HeroPreview } from "../../types";
import {
  FilterHeroes,
  HeroPreviewComponent,
} from "../../components";
import "./mainPage.styles.css"

const MainPage = () => {
  const [heroesStats, setHeroesStats] = useState<I_HeroPreview[]>([]);
  const [filteredHeroesStats, setFilteredHeroesStats] = useState<I_HeroPreview[]>([]);
  useEffect(() => {
    const getData = async () => {
      const data = await getHeroesStatsAPI();
      setHeroesStats(data.sort((a : I_HeroPreview, b : I_HeroPreview) => a.localized_name > b.localized_name ? 1 : -1));
    };
    getData();
  }, []);
  return (
    <>
        <FilterHeroes heroes={heroesStats} StateFunc={setFilteredHeroesStats}/>
        <div className="heroPreviewsDiv">
          {filteredHeroesStats.map((item) => {
            return <HeroPreviewComponent hero={item} />;
          })}
        </div>
    </>
  );
}

export {MainPage};
