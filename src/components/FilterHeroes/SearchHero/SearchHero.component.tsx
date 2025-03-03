import "./SearchHero.styles.css"
import React from "react";
import SearchIcon from "../../../assets/search.icon.png"
interface I_SearchHeroProps {
  handle :React.FormEventHandler<HTMLInputElement>
  SearchValue: string
}

export const SearchHero: React.FC<I_SearchHeroProps> = ({handle,SearchValue}) => {
  return (
    <div className="SearchHeroDiv">
        <img src={SearchIcon} alt="search icon" className="SearchHeroIconImage" />
        <input type="text" className="SearchHeroInput" value={SearchValue} onInput={handle} />
    </div>
  );
};
