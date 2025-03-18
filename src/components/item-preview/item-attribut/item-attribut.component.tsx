import { IAttribItem } from "../../../types";
import "./item-attribut.styles.css";
interface IItemAttributesProps {
  attribItem: IAttribItem;
}

export const ItemAttributesComponent: React.FC<IItemAttributesProps> = ({
  attribItem,
}) => {
  return attribItem.display ? (
    <p key={attribItem.key} className="itemAttrText">
      {attribItem.display.split("{value}")[0]}
      <span className="itemAttrValueText">
        {attribItem.value}
        {attribItem.display.includes("%") ? "%" : null}
      </span>
      {attribItem.display.split("{value}")[1]
        ? attribItem.display.split("{value}")[1].replace("%", "")
        : null}
    </p>
  ) : null;
};
