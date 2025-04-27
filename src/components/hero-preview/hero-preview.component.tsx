import React from "react";
import { IHeroPreview } from "../../types";
import "./hero-preview.styles.css";
import { Link } from "react-router-dom";
import { getHeroAttributeImage } from "../../utils";

interface IHeroPreviewProps {
  heroPreview: IHeroPreview;
}

export const HeroPreviewComponent: React.FC<IHeroPreviewProps> = ({
  heroPreview,
}) => {
  return (
    <Link to={`/singleHero/${heroPreview.id}`}>
      <div
        className={`heroPreviewDiv heroPreviewDiv_${heroPreview.primary_attr}`}
      >
        <img src={heroPreview.img} className="heroPreviewImg" />
        <p className="heroPreviewName">
          {" "}
          <img
            src={getHeroAttributeImage(heroPreview.primary_attr)}
            alt={heroPreview.primary_attr}
            className="heroPreviewAttributeImage"
          />
          {heroPreview.localized_name}
        </p>
      </div>
    </Link>
  );
};
