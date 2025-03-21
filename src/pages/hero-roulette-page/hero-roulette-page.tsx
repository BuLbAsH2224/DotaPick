import { HeroRouletteComponent } from "../../components";
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
      <h2>Рулетка героев</h2>
      <p>Рулетка героев - поможет выбрать вам персонажа</p>
      {heroesStats ? (
        <HeroRouletteComponent heroes={heroesStats} />
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export { HeroRoulettePage };
