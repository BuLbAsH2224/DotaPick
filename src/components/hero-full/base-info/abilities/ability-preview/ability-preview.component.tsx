import { useState } from "react";
import { IAbility, IAghsDesc } from "../../../../../types";
import "./ability-preview.styles.css";
import { AbilityInfo } from "../../../../ability-info";

interface IAbiltiyPreviewProps {
  ability: IAbility;
  aghsAndShard: IAghsDesc
}

export const AbilityPreviewComponent: React.FC<IAbiltiyPreviewProps> = ({
  ability,aghsAndShard
}) => {
  const [visible, setVisible] = useState<boolean>(false);
  const isShard : string = (aghsAndShard.has_shard && ability.dname === aghsAndShard.shard_skill_name && aghsAndShard.shard_new_skill) || ability.is_shard  ? "heroAbilityShard" : ""
  const isAghs : string = (aghsAndShard.has_scepter && ability.dname === aghsAndShard.scepter_skill_name && aghsAndShard.scepter_new_skill)  || ability.is_aghs ? "heroAbilityAghs" : ""
  const handleMouseEnter: React.MouseEventHandler<HTMLImageElement> = () => {
    setVisible(true);
  };
  const handleMouseLeave: React.MouseEventHandler<HTMLImageElement> = () => {
    setVisible(false);
  };
 
  return (
    <div>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={
          !ability.is_innate &&
          String(ability.behavior).toLowerCase() === "passive"
            ? `heroAbilityImgContainerPassive ${isShard} ${isAghs}`
            : `heroAbilityImgContainer ${isShard} ${isAghs}`
        }
        style={{
          backgroundImage: ability.is_innate
            ? `url(https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/icons/innate_icon.png)`
            : `url(${ability.img})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>
      <AbilityInfo
        ability={ability}
        styles={{
          position: "absolute",
          visibility: visible ? "visible" : "hidden",
        }}
      />
    </div>
  );
};
