import "./base-hp-mana.styles.css";
import { IHeroStats } from "../../../../types";

interface IBaseHpManaProps {
  hero: IHeroStats;
}

export const BaseHpManaComponent: React.FC<IBaseHpManaProps> = ({ hero }) => {
  return (
    <div className="BaseHealthManaDiv">
        <p className="BaseHeroHealth"><span>{hero.base_health}</span></p>
        <p className="BaseHeroMana"><span>{hero.base_mana}</span></p>
    </div>
  );
};
