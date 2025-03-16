import { CSSProperties } from "react";
import { IAbilitiesItem, IAttribItem, IItem } from "../../types";
import "./item-preview.styles.css";

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
      {item.attrib && (
        <div>
          {item.attrib.map(
            (attribItem: IAttribItem) =>
              attribItem.display && (
                <p>{attribItem.display.replace("{value}", attribItem.value)}</p>
              )
          )}
        </div>
      )}
      <p>{item.abilities && item.abilities.map((ability : IAbilitiesItem) => <span key={ability.title}>{ability.type}:{ability.title}</span>)}</p>
      <p>{item.lore}</p>
    </div>
  );
};
