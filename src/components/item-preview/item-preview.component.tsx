import { CSSProperties, forwardRef } from "react";
import { IAbilitiesItem, IItem } from "../../types";
import "./item-preview.styles.css";
import { ItemAbilityComponent } from "./item-ability";
import { ItemBaseInfoComponent } from "./item-base-info";

interface IItemPreviewProps {
  item: IItem;
  styles?: CSSProperties;
}

export const ItemPreviewComponent = forwardRef<
  HTMLDivElement,
  IItemPreviewProps
>(({ item, styles }, ref) => {
  return (
    <div ref={ref} style={styles} className="itemPreviewDiv">
      <div className="itemPreviewBaseInfo">
        <img
          className="itemPreviewImg"
          src={`https://cdn.akamai.steamstatic.com/${item.img}`}
          alt="item image"
        />
        <div className="itemPreviewNameAndCostDiv">
          <p className="itemPreviewName">{item.dname}</p>

          <div className="itemPreviewCostDiv">
            <img
              className="itemPreviewCostImg"
              src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/tooltips/gold.png"
              alt="gold icon"
            />
            <p className="itemPreviewCostText">{item.cost}</p>
          </div>
        </div>
      </div>
      <div className="itemPreviewOtherInfoDiv">
        <ItemBaseInfoComponent item={item} />
        {item.abilities && item.abilities.length ? (
          <div>
            {item.abilities.map((thisItem: IAbilitiesItem) => (
              <ItemAbilityComponent
                abilityItem={thisItem}
                key={thisItem.description}
              />
            ))}
          </div>
        ) : null}
        {item.lore ? (
          <div className="itemPreviewLoreDiv">
            <p className="itemPreviewLore">{item.lore}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
});
