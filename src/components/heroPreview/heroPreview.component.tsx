import React from "react";
import { I_HeroPreview } from "../../types";
import "./HeroPreview.styles.css";
import { Link } from "react-router-dom";
import { getHeroAttributeImage, getHeroImageUrlFromName } from "../../utils";

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
        <p className="heroPreviewName"> <img src={getHeroAttributeImage(hero.primary_attr)} alt={hero.primary_attr} className="heroPreviewAttributeImage" />{hero.localized_name}</p>
      </div>
    </Link>
  );
};
