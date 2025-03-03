import "./search-hero.styles.css"
import React from "react";
import SearchIcon from "../../../assets/search.icon.png"
interface ISearchHeroProps {
  handle :React.FormEventHandler<HTMLInputElement>
  SearchValue: string
}

export const SearchHeroComponent: React.FC<ISearchHeroProps> = ({handle,SearchValue}) => {
  return (
    <div className="SearchHeroDiv">
        <img src={SearchIcon} alt="search icon" className="SearchHeroIconImage" />
        <input type="text" className="SearchHeroInput" value={SearchValue} onInput={handle} />
    </div>
  );
};
