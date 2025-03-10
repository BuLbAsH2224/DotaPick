import { useState } from "react";
import { IHeroStats } from "../../types";
import { FilterHeroesComponent, HeroPreviewComponent } from "../../components";
import "./main-page.styles.css";

interface IMainPageProps{
  heroesStats: IHeroStats[] | undefined;
}

const MainPage : React.FC<IMainPageProps> = ({ heroesStats }) => {
  const [filteredHeroesStats, setFilteredHeroesStats] = useState<IHeroStats[]>([]);
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
