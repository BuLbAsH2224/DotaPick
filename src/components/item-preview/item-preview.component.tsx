import { CSSProperties } from "react";
import { IAbilitiesItem, IAttribItem, IItem } from "../../types";
import "./item-preview.styles.css";
import { ItemAttributesComponent } from "./item-attribut";
import { ItemAbilityComponent } from "./item-ability";

interface IItemPreviewProps {
  item: IItem;
  styles?: CSSProperties;
}

export const ItemPreviewComponent: React.FC<IItemPreviewProps> = ({
  item,
  styles,
}) => {
  console.log(item);
  return (
    <div style={styles} className="itemPreviewDiv">
      <img
        src={`https://cdn.akamai.steamstatic.com/${item.img}`}
        alt="item image"
      />
      <p>{item.dname}</p>
      <p>{item.cost}</p>
      {item.behavior ? (
        <p>
          TARGET:
          {Array.isArray(item.behavior)
            ? [...item.behavior].join("/")
            : item.behavior}
        </p>
      ) : null}

      {item.attrib && item.attrib.length ? (
        <div>
          {item.attrib.map((thisItem: IAttribItem) => (
            <ItemAttributesComponent attribItem={thisItem} key={thisItem.key} />
          ))}
        </div>
      ) : null}

      {item.abilities && item.abilities.length ? (
        <div>
          {item.abilities.map((thisItem: IAbilitiesItem) => (
            <ItemAbilityComponent abilityItem={thisItem} key={thisItem.title} />
          ))}
        </div>
      ) : null}
      <div></div>
      <p>{item.lore}</p>
    </div>
  );
};
