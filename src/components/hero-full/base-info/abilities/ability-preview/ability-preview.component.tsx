import { useState } from "react";
import { IAbility, IHeroStats } from "../../../../../types";
import "./ability-preview.styles.css";
import { AbilityInfo } from "../../../../ability-info";
import { getAbilityVideo } from "../../../../../utils";

interface IAbiltiyPreviewProps {
  ability: IAbility;
    hero : IHeroStats
}

export const AbiltiyPreviewComponent: React.FC<IAbiltiyPreviewProps> = ({
  ability,
  hero
}) => {
  const [visible, setVisible] = useState<boolean>(false);
  const handleMouseEnter: React.MouseEventHandler<HTMLImageElement> = () => {
    setVisible(true);
  };
  const handleMouseLeave: React.MouseEventHandler<HTMLImageElement> = () => {
    setVisible(false);
  };

  return (
    <div>
      <img
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="heroAbilityImg"
        src={ ability.is_innate ?  "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/icons/innate_icon.png" : `https://cdn.cloudflare.steamstatic.com${ability.img}`}
      />
      <AbilityInfo
        abilityVideoSrc={getAbilityVideo(hero.name,ability.img)}
        ability={ability}
        styles={{
          position: "absolute",
          visibility: visible ? "visible" : "hidden",
        }}
      />
    </div>
  );
};
