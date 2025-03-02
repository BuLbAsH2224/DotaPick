import "./SearchHero.styles.css"
import React from "react";
interface I_SearchHeroProps {
  handle :React.FormEventHandler<HTMLInputElement>
  SearchValue: string
}

export const SearchHero: React.FC<I_SearchHeroProps> = ({handle,SearchValue}) => {
  return (
    <div>
        <input type="text" value={SearchValue} onInput={handle} />
    </div>
  );
};
