import React from "react";
import "./attribute-choose-buttons.styles.css";
import { getHeroAttributeImage } from "../../../utils";

type filterButtonType = string | null;


interface IAttributeChooseButtons {
  Attr : filterButtonType,
  AttrButton : string,
  handle : React.ChangeEventHandler<HTMLInputElement>;
}

export const AttributeChooseButtonComponent: React.FC<IAttributeChooseButtons> = ({Attr,AttrButton,handle}) => {
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
