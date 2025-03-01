import React from "react";
import { I_HeroPreview } from "../../types";
import "./heroPreview.styles.css";
import { Link } from "react-router-dom";
import { getHeroImageUrlFromName } from "../../utils";

interface IheroPreviewProps {
  hero: I_HeroPreview;
}

export const HeroPreviewComponent: React.FC<IheroPreviewProps> = ({ hero }) => {
  return (
    <Link to={`/singleHero/${hero.id}` }>
      <div className="heroPreviewDiv" >
        <img
          src={getHeroImageUrlFromName(hero.name)}
          className="heroPreviewImg"
        />
        <p className="heroPreviewName">{hero.localized_name}</p>
      </div>
    </Link>
  );
};
