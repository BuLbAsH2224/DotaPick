import { useEffect, useState } from "react";
import { HeroPreviews, IHeroPreview } from "../../types";
import {
  FilterHeroesComponent,
  HeroPreviewComponent,
  Loader,
} from "../../components";
import "./main-page.styles.css";
import { getHeroesPreviewAPI } from "../../api";
import { useQuery } from "@tanstack/react-query";
import Arrow from "../../assets/arrow.icon.svg";

const MainPage: React.FC = () => {
  const { data: heroesPreviewData } = useQuery<HeroPreviews>({
    queryKey: ["heroesStats"],
    queryFn: getHeroesPreviewAPI,
  });
  const [filteredHeroesStats, setFilteredHeroesStats] = useState<HeroPreviews>(
    []
  );
  const [arrowVisible, setArrowVisible] = useState<boolean>(false);
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 100) {
        setArrowVisible(true);
      } else {
        setArrowVisible(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  const handleOnClickArrow: React.MouseEventHandler<HTMLImageElement> = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <>
      <div className="mainPageAboutTextDiv">
        <h2 id="hero_pick">Выбери своего героя</h2>
        <p className="int">
          Листай галерею героев, изучай их способности, таланты и сильные
          стороны, подбирай роль под стратегию команды — и смело выбирай того,
          кто приведёт вас к безоговорочной победе.
        </p>
      </div>
      <img
        src={Arrow}
        alt="arrow"
        className={`arrowDown ${arrowVisible ? "arrowVisible" : "arrowHidden"}`}
        onClick={handleOnClickArrow}
      />
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
