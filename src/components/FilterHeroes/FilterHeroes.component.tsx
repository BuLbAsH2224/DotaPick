import React, { useEffect } from "react";
import { useState } from "react";
import { I_HeroPreview, filterButtonType } from "../../types";
import { RadioAttrButton } from "./RadioAttrButtons";
import { SearchHero } from "./SearchHero";
import "./FilterHeroes.styles.css";

interface I_FilterHeroesProps {
  StateFunc: React.Dispatch<React.SetStateAction<I_HeroPreview[]>>;
  heroes: I_HeroPreview[];
}

const Attributes: string[] = ["str", "agi", "int", "all"];

export const FilterHeroes: React.FC<I_FilterHeroesProps> = ({
  heroes,
  StateFunc,
}) => {
  const [Attr, setAttr] = useState<filterButtonType>(null);
  const [SearchValue, setSearchValue] = useState<string>("");
  const [filteredArray, setFilteredArray] = useState<I_HeroPreview[]>(heroes);

  const handleRadioClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.id === Attr) setAttr(null);
    else setAttr(event.target.id);
  };
  const handleOnInput = (event: React.FormEvent<HTMLInputElement>) => {
    setSearchValue(event.currentTarget.value)
  };
  useEffect(() => {
    setFilteredArray(heroes);
  }, [heroes]);
  useEffect(() => {
    const data = {result:  [...heroes]} 


    if (Attr) {
      data.result = data.result.filter(item => item.primary_attr === Attr);
    }
    if (SearchValue != "") {
      data.result = data.result.filter(item => 
        item.localized_name.toLowerCase().includes(SearchValue.toLowerCase())
      );
    }

    setFilteredArray(data.result);
  }, [Attr, SearchValue, heroes]);
  useEffect(() => {
    StateFunc(filteredArray);
  }, [StateFunc, filteredArray]);
  return (
    <div className="FiltersAndFoundDiv">
      <div>
      {Attributes.map((item) => {
        return (
          <RadioAttrButton
            key={item}
            AttrButton={item}
            Attr={Attr}
            handle={handleRadioClick}
          />
        );
      })}
      </div>
      <SearchHero SearchValue={SearchValue} handle={handleOnInput} />
    </div>
  );
};
