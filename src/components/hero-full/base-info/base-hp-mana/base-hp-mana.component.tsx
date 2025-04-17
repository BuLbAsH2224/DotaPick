import "./base-hp-mana.styles.css";
import { IHeroStats } from "../../../../types";

interface IBaseHpManaProps {
  hero: IHeroStats;
}

export const BaseHpManaComponent: React.FC<IBaseHpManaProps> = ({ hero }) => {

  return (
    <div className="BaseHealthManaDiv">
      <p className="BaseHeroHealth">
        <span>{hero.base_health + (hero.base_str * 22)}</span>
      </p>
      <p className="BaseHeroMana">
        <span>{hero.base_mana + (hero.base_int * 12)}</span>
      </p>
    </div>
  );
};
