import React, { useEffect } from "react";
import { useState } from "react";
import { IHeroStats, filterButtonType } from "../../types";
import { AttributeChooseButtonComponent } from "./attribute-choose-buttons";
import { SearchHeroComponent } from "./search-hero";
import "./filter-heroes.styles.css";

interface IFilterHeroesProps {
  StateFunc: React.Dispatch<React.SetStateAction<IHeroStats[]>>;
  heroes: IHeroStats[] | undefined;
}

const Attributes: string[] = ["str", "agi", "int", "all"];

export const FilterHeroesComponent: React.FC<IFilterHeroesProps> = ({
  heroes,
  StateFunc,
}) => {
  
  const [Attr, setAttr] = useState<filterButtonType>(null);
  const [SearchValue, setSearchValue] = useState<string>("");

  const handleRadioClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.id === Attr) setAttr(null);
    else setAttr(event.target.id);
  };
  const handleOnInput = (event: React.FormEvent<HTMLInputElement>) => {
    setSearchValue(event.currentTarget.value);
  };
  useEffect(() => {
    if (!heroes) return
      const filtereds = {heroFiltereds: heroes}
    
    if (Attr) {
      filtereds.heroFiltereds = filtereds.heroFiltereds.filter(item => item.primary_attr === Attr);
    }
    if (SearchValue) {
      filtereds.heroFiltereds = filtereds.heroFiltereds.filter(item => 
        item.localized_name.toLowerCase().includes(SearchValue.toLowerCase())
      );
    }
  
    StateFunc(filtereds.heroFiltereds);
  }, [StateFunc,Attr, SearchValue, heroes]);
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
