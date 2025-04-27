import { IHeroPopularItems, IItem } from "../../../types";
import "./popular-items.styles.css";
import { PopularItemsPreviewComponent } from "./popular-items-preview";

interface IPopularItemsProps {
  popularItems: IHeroPopularItems;
}

export const PopularItemsComponent: React.FC<IPopularItemsProps> = ({
  popularItems,
}) => {
 
  return (
    <div className="itemsPreviewDiv">
      <div className="popularItemsDiv">
        <h4 className="itemsTimeH4Text">Start game items</h4>
        <div className="popularItemsPreviewDiv">
          {popularItems.start_game_items.map((item: IItem) => (
            <PopularItemsPreviewComponent key={item.id} item={item} />
          ))}
        </div>
      </div>

      <div className="popularItemsDiv">
        <h4 className="itemsTimeH4Text">Early game items</h4>
        <div className="popularItemsPreviewDiv">
          {popularItems.early_game_items.map((item: IItem) => (
            <PopularItemsPreviewComponent key={item.id} item={item} />
          ))}
        </div>
      </div>

      <div className="popularItemsDiv">
        <h4 className="itemsTimeH4Text">Mid game items</h4>
        <div className="popularItemsPreviewDiv">
          {popularItems.mid_game_items.map((item: IItem) => (
            <PopularItemsPreviewComponent item={item} key={item.id} />
          ))}
        </div>
      </div>
      <div className="popularItemsDiv">
        <h4 className="itemsTimeH4Text">Late game items</h4>
        <div className="popularItemsPreviewDiv">
          {popularItems.late_game_items.map((item: IItem) => (
            <PopularItemsPreviewComponent item={item} key={item.id}/>
          ))}
        </div>
      </div>
    </div>
  );
};
