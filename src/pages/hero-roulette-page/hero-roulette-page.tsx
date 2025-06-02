import { useQuery } from "@tanstack/react-query";
import { getHeroesPreviewAPI } from "../../api";
import { HeroRouletteComponent, Loader } from "../../components";
import { HeroPreviews } from "../../types";
import "./hero-roulette-page.styles.css";

const HeroRoulettePage: React.FC = () => {
  const { data: heroesPreviewData } = useQuery<HeroPreviews>({
    queryKey: ["heroesStats"],
    queryFn: getHeroesPreviewAPI,
  });
  return (
    <>
      <div className="rouletteHeaderContainer">
        <h1 className="rouletteHeader">Рулетка героев</h1>
        <p className="rouletteHeaderText">
          Один клик — один случайный герой. Попробуй удачу!
        </p>
      </div>
      {heroesPreviewData ? (
        <HeroRouletteComponent heroes={heroesPreviewData} />
      ) : (
        <Loader />
      )}
    </>
  );
};

export { HeroRoulettePage };
