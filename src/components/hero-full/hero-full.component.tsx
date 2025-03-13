import { IHeroStats } from "../../types";
import { getHeroImageUrlFromName } from "../../utils";
import { BaseInfoComponent } from "./base-info/base-info.component";
import { useEffect } from "react";
import "./hero-full.styles.css"

interface IHeroFullProps {
  hero: IHeroStats;
}

export const HeroFullComponent: React.FC<IHeroFullProps> = ({ hero }) => {
  useEffect(()=>{
    window.scrollTo({ top: 0})
  },[])
  return (
    <div className="heroFullCompDiv">
      <BaseInfoComponent hero={hero}/>
      <img
        src={getHeroImageUrlFromName(hero.name)}
        className="heroPreviewImg"
      />
    </div>
  );
};
