import { useState } from "react";
import { HeroPreviews, IHeroPreview } from "../../types";
import {
  FilterHeroesComponent,
  HeroPreviewComponent,
  Loader,
} from "../../components";
import "./main-page.styles.css";
import { getHeroesPreviewAPI } from "../../api";
import { useQuery } from "@tanstack/react-query";

const MainPage: React.FC = () => {
  const { data: heroesPreviewData } = useQuery<HeroPreviews>({
    queryKey: ["heroesStats"],
    queryFn: getHeroesPreviewAPI,
  });
  const [filteredHeroesStats, setFilteredHeroesStats] = useState<HeroPreviews>(
    []
  );

  return (
    <>
      <div className="mainPageAboutTextDiv">
        <h2 id="hero_pick">Выберите героя</h2>
        <p className="int">
          Список героев в Dota 2 огромен и безгранично разнообразен: здесь вы
          встретите и магов-тактиков, и свирепых громил,и хитроумных негодяев.
          Их невероятные способности и сокрушительные ульты непременно приведут
          вас к победе.
        </p>
      </div>
      <FilterHeroesComponent
        heroesPreview={heroesPreviewData}
        StateFunc={setFilteredHeroesStats}
      />
      <div className="heroPreviewsDiv">
        {!heroesPreviewData ? (
          <Loader />
        ) : filteredHeroesStats.length ? (
          filteredHeroesStats.map((item: IHeroPreview) => {
            return <HeroPreviewComponent heroPreview={item} key={item.id} />;
          })
        ) : (
          <p className="HeroesNotFound">Герои не найдены!</p>
        )}
      </div>
    </>
  );
};

export { MainPage };
