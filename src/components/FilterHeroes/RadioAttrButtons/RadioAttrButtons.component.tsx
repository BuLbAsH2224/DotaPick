import React from "react";
import "./RadioAttrButtons.styles.css";
import { filterButtonType } from "../../../types";
import { getHeroAttributeImage } from "../../../utils";

interface I_RadioAttrButtonProps {
  Attr : filterButtonType,
  AttrButton : string,
  handle : React.ChangeEventHandler<HTMLInputElement>;
}

export const RadioAttrButton: React.FC<I_RadioAttrButtonProps> = ({Attr,AttrButton,handle}) => {
  return (
    <label htmlFor={AttrButton}>
    <input
      className="AttrCheckbox"
      type="checkbox"
      name="attr"
      id={`${AttrButton}`}
      checked={Attr === AttrButton}
      onChange={handle}
    />
    <img src={getHeroAttributeImage(AttrButton)} className={`buttonAttrImage`}/>
    </label>
  );
};
