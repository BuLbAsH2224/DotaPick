import React, { useEffect } from "react";
import { useState } from "react";
import { IHeroPreview, filterButtonType } from "../../types";
import { AttributeChooseButtonComponent } from "./attribute-choose-buttons";
import { SearchHeroComponent } from "./search-hero";
import "./filter-heroes.styles.css";

interface IFilterHeroesProps {
  StateFunc: React.Dispatch<React.SetStateAction<IHeroPreview[]>>;
  heroes: IHeroPreview[];
}

const Attributes: string[] = ["str", "agi", "int", "all"];

export const FilterHeroesComponent: React.FC<IFilterHeroesProps> = ({
  heroes,
  StateFunc,
}) => {
  const [Attr, setAttr] = useState<filterButtonType>(null);
  const [SearchValue, setSearchValue] = useState<string>("");
  const [filteredArray, setFilteredArray] = useState<IHeroPreview[]>(heroes);

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
          <AttributeChooseButtonComponent
            key={item}
            AttrButton={item}
            Attr={Attr}
            handle={handleRadioClick}
          />
        );
      })}
      </div>
      <SearchHeroComponent SearchValue={SearchValue} handle={handleOnInput} />
    </div>
  );
};
