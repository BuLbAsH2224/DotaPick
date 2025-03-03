import { useEffect, useState } from "react";
import { getHeroesStatsAPI } from "../../api";
import { I_HeroPreview } from "../../types";
import { FilterHeroes, HeroPreviewComponent } from "../../components";
import "./mainPage.styles.css";

const MainPage = () => {
  const [heroesStats, setHeroesStats] = useState<I_HeroPreview[]>([]);
  const [filteredHeroesStats, setFilteredHeroesStats] = useState<
    I_HeroPreview[]
  >([]);
  useEffect(() => {
    const getData = async () => {
      const data = await getHeroesStatsAPI();
      setHeroesStats(
        data.sort((a: I_HeroPreview, b: I_HeroPreview) =>
          a.localized_name > b.localized_name ? 1 : -1
        )
      );
    };
    getData();
  }, []);
  return (
    <>
      <div className="mainPageAboutTextDiv">
        <h2>Выберите героя</h2>
        <p className="int">
          Список героев в Dota 2 огромен и безгранично разнообразен: здесь вы
          встретите и магов-тактиков, и свирепых громил,и хитроумных негодяев.
          Их невероятные способности и сокрушительные ульты непременно приведут
          вас к победе.
        </p>
      </div>
      <FilterHeroes heroes={heroesStats} StateFunc={setFilteredHeroesStats} />
      <div className="heroPreviewsDiv">
        {
          filteredHeroesStats.length ?  filteredHeroesStats.map((item) => {
            return <HeroPreviewComponent hero={item} />;
          }) : <p className="HeroesNotFound">Герои не найдены!</p>
          
        }
      </div>
    </>
  );
};

export { MainPage };
