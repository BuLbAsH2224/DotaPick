import { HeroRouletteComponent, Loader } from "../../components";
import { IHeroStats } from "../../types";
import "./hero-roulette-page.styles.css";

interface IHeroRoulettePageProps {
  heroesStats: IHeroStats[] | undefined;
}

const HeroRoulettePage: React.FC<IHeroRoulettePageProps> = ({
  heroesStats,
}) => {
  return (
    <>
      <div className="rouletteHeaderContainer">
        <h1 className="rouletteHeader">Рулетка героев</h1>
        <p className="rouletteHeaderText">
          Рулетка героев - поможет выбрать вам персонажа
        </p>
      </div>
      {heroesStats ? (
        <HeroRouletteComponent heroes={heroesStats} />
      ) : (
        <Loader/>
      )}
    </>
  );
};

export { HeroRoulettePage };
