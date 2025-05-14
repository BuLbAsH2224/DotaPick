import { IHeroStats } from "../../../../types";
import "./hero-indicators.styles.css";

interface IHeroindicators {
  hero: IHeroStats;
}

export const HeroIndicators: React.FC<IHeroindicators> = ({ hero }) => {
  const attackBonus : number = hero.primary_attr !== "all" ? hero[`base_${hero.primary_attr}`]  : Math.round((hero.base_agi+hero.base_int+hero.base_str) * 0.45)

 
  return (
    <div className="heroIndicatorsParentContainer">
      <div className="heroIndicatorsContainer">
        <p className="heroIndicatorsTheme">АТАКА</p>
        <div className="indicatorsContainer">
          <div className="heroIndicatorContainer">
            <img src="https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_damage.png" />
            <p>
              {hero.base_attack_min + attackBonus}-{hero.base_attack_max + attackBonus}
            </p>
          </div>
          <div className="heroIndicatorContainer">
            <img src="https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_attack_time.png" />
            <p>{hero.attack_rate}</p>
          </div>
          <div className="heroIndicatorContainer">
            <img src="https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_attack_range.png" />
            <p>{hero.attack_range}</p>
          </div>
          <div className="heroIndicatorContainer">
            <img src="https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_projectile_speed.png" />
            <p>{hero.projectile_speed}</p>
          </div>
        </div>
      </div>
      <div className="heroIndicatorsContainer">
        <p className="heroIndicatorsTheme">ЗАЩИТА</p>
        <div className="indicatorsContainer">
          <div className="heroIndicatorContainer">
            <img src="https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_armor.png" />
            <p>
              {Math.round((hero.base_armor + hero.base_agi * 0.167) * 10) / 10}
            </p>
          </div>
          <div className="heroIndicatorContainer">
            <img src="https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_magic_resist.png" />
            <p>{hero.base_mr}%</p>
          </div>
        </div>
      </div>
      <div className="heroIndicatorsContainer">
        <p className="heroIndicatorsTheme">МОБИЛЬНОСТЬ</p>
        <div className="indicatorsContainer">
          <div className="heroIndicatorContainer">
            <img src="https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_movement_speed.png" />
            <p>{hero.move_speed}</p>
          </div>
          <div className="heroIndicatorContainer">
            <img src="https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_vision.png" />
            <p>
              {hero.day_vision}/{hero.night_vision}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
