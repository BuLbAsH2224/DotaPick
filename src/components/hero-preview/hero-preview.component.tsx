import React from "react";
import { IHeroPreview } from "../../types";
import "./hero-preview.styles.css";
import { Link } from "react-router-dom";
import { getHeroAttributeImage, getHeroImageUrlFromName } from "../../utils";

interface IHeroPreviewProps {
  hero: IHeroPreview;
}

export const HeroPreviewComponent: React.FC<IHeroPreviewProps> = ({ hero }) => {
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
