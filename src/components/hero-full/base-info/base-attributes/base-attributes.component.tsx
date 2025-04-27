import "./base-attributes.styles.css";

import { IHeroStats } from "../../../../types";
import { getHeroAttributeImage } from "../../../../utils";

interface IBaseAttributesProps {
  hero: IHeroStats;
}

export const BaseAttributesComponent: React.FC<IBaseAttributesProps> = ({
  hero,
}) => {
  console.log(hero)
  return (
    <div className="BaseAttributesHeaderDiv">
      <div className="BaseAttributesDiv">
        <img className="BaseAttributesImg" src={getHeroAttributeImage("str")} alt="str" />
        <p className="BaseAttributesBase">{hero.base_str}</p>
        <p className="BaseAttributesGain">+{hero.str_gain}</p>
      </div>
      <div className="BaseAttributesDiv">
        <img className="BaseAttributesImg" src={getHeroAttributeImage("agi")} alt="agi" />
        <p className="BaseAttributesBase">{hero.base_agi}</p>
        <p className="BaseAttributesGain">+{hero.agi_gain}</p>
      </div>
      <div className="BaseAttributesDiv">
        <img className="BaseAttributesImg" src={getHeroAttributeImage("int")} alt="int" />
        <p className="BaseAttributesBase">{hero.base_int}</p>
        <p className="BaseAttributesGain">+{hero.int_gain}</p>
      </div>
    </div>
  );
};
