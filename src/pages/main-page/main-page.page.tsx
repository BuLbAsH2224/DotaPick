import { useEffect, useState } from "react";
import { getHeroesStatsAPI } from "../../api";
import { IHeroPreview } from "../../types";
import { FilterHeroesComponent, HeroPreviewComponent } from "../../components";
import "./main-page.styles.css";

const MainPage : React.FC = () => {
  const [heroesStats, setHeroesStats] = useState<IHeroPreview[]>([]);
  const [filteredHeroesStats, setFilteredHeroesStats] = useState<
    IHeroPreview[]
  >([]);
  useEffect(() => {
    const getData = async () => {
      const data = await getHeroesStatsAPI();
      setHeroesStats(
        data.sort((a: IHeroPreview, b: IHeroPreview) =>
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
      <FilterHeroesComponent heroes={heroesStats} StateFunc={setFilteredHeroesStats} />
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
