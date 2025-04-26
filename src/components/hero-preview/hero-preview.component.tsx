import React from "react";
import { IHeroStats } from "../../types";
import "./hero-preview.styles.css";
import { Link } from "react-router-dom";
import { getHeroAttributeImage, getHeroImageUrlFromName } from "../../utils";

interface IHeroPreviewProps {
  hero:  IHeroStats;
}

export const HeroPreviewComponent: React.FC<IHeroPreviewProps> = ({ hero }) => {
  return (
    <Link to={`/singleHero/${hero.id}` } >
      <div className={`heroPreviewDiv heroPreviewDiv_${hero.primary_attr}`} >
        <img
          src={getHeroImageUrlFromName(hero.name)}
          className="heroPreviewImg"
        />
        <p className="heroPreviewName"> <img src={getHeroAttributeImage(hero.primary_attr)} alt={hero.primary_attr} className="heroPreviewAttributeImage" />{hero.localized_name}</p>
      </div>
    </Link>
  );
};
