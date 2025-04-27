import React, { useEffect } from "react";
import { useState } from "react";
import { HeroPreviews, IHeroPreview } from "../../types";
import { AttributeChooseButtonComponent } from "./attribute-choose-buttons";
import { SearchHeroComponent } from "./search-hero";
import "./filter-heroes.styles.css";

interface IFilterHeroesProps {
  StateFunc: React.Dispatch<React.SetStateAction<HeroPreviews>>;
  heroesPreview: HeroPreviews | undefined;
}

const Attributes: string[] = ["str", "agi", "int", "all"];

type filterButtonType = null | string;

export const FilterHeroesComponent: React.FC<IFilterHeroesProps> = ({
  heroesPreview,
  StateFunc,
}) => {
  const [Attr, setAttr] = useState<filterButtonType>(null);
  const [SearchValue, setSearchValue] = useState<string>("");

  const handleRadioClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.id === Attr) setAttr(null);
    else setAttr(event.target.id);
  };

  useEffect(() => {
    if (!heroesPreview) return;
    const filtereds = {
      heroFiltereds: heroesPreview.sort((a: IHeroPreview, b: IHeroPreview) =>
        a.localized_name.toLocaleLowerCase() >
        b.localized_name.toLocaleLowerCase()
          ? 1
          : -1
      ),
    };

    if (Attr) {
      filtereds.heroFiltereds = filtereds.heroFiltereds.filter(
        (item) => item.primary_attr === Attr
      );
    }
    if (SearchValue) {
      filtereds.heroFiltereds = filtereds.heroFiltereds.filter((item) =>
        item.localized_name.toLowerCase().includes(SearchValue.toLowerCase())
      );
    }

    StateFunc(filtereds.heroFiltereds);
  }, [StateFunc, Attr, SearchValue, heroesPreview]);
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
      <SearchHeroComponent
        SearchValue={SearchValue}
        SearchSetFunc={setSearchValue}
      />
    </div>
  );
};
