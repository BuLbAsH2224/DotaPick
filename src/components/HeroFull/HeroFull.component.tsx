import React from "react";
import { I_HeroStats } from "../../types";

import "./HeroFull.styles.css";
import { getHeroImageUrlFromName, getHeroVideoUrlFromName } from "../../utils";

interface IheroFullProps {
  hero: I_HeroStats;
}

export const HeroFullComponent: React.FC<IheroFullProps> = ({ hero }) => {
  
  return (
    <div className="heroFullDiv">
      <video autoPlay loop muted playsInline className="heroFullVideo">
        <source
          src={getHeroVideoUrlFromName(hero.name)}
          type="video/webm"
        />
      </video>
      <img src={getHeroImageUrlFromName(hero.name)} className="heroPreviewImg" />
      <p>{hero.localized_name}</p>
    </div>
  );
};
