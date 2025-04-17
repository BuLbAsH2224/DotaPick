import "./search-hero.styles.css"
import React from "react"
import SearchIcon from "../../../assets/search.icon.png"
import clearSearchInput from "../../../assets/clearSearchButton.svg"

interface ISearchHeroProps {
  SearchSetFunc: React.Dispatch<React.SetStateAction<string>>
  SearchValue: string
}

export const SearchHeroComponent: React.FC<ISearchHeroProps> = ({ SearchSetFunc, SearchValue }) => {
  const handleOnInput = (event: React.FormEvent<HTMLInputElement>) => {
    SearchSetFunc(event.currentTarget.value)
  }

  const handleClickClearInput = () => {
    SearchSetFunc("")
  }

  return (
    <div className="SearchHeroDiv">
      <img src={SearchIcon} alt="search icon" className="SearchHeroIconImage" />
      <input
        type="text"
        className="SearchHeroInput"
        value={SearchValue}
        onInput={handleOnInput}
        placeholder="Search..."
      />
      <img
        src={clearSearchInput}
        alt="clear input"
        onClick={handleClickClearInput}
        className={`SearchHeroClearIcon ${SearchValue ? "visible" : "hidden"}`}
      />
    </div>
  )
}
