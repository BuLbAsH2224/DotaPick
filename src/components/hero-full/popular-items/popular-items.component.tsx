import React, { useRef, useState } from "react";
import { IHeroPopularItems, IItem } from "../../../types";
import "./popular-items.styles.css";
import { ItemPreviewComponent } from "../../item-preview";

interface PopularItemsProps {
  popularItems: IHeroPopularItems;
}

export const PopularItemsComponent: React.FC<PopularItemsProps> = ({
  popularItems,
}) => {
  const [activeItem, setActiveItem] = useState<IItem | null>(null);
  const [previewPosition, setPreviewPosition] = useState<{
    x: number;
    y: number;
  }>({ x: 0, y: 0 });
  const itemPreviewRef = useRef<HTMLDivElement | null>(null)
  const handleMouseEnter =
    (item: IItem) => (e: React.MouseEvent<HTMLImageElement >) => {
      if (!itemPreviewRef) return
      setActiveItem(item);
      const element = e.target as HTMLImageElement;
     
      const rect = element.getBoundingClientRect();
      const newPos = { x: 0, y: 0 };
      if (rect.left >= 300) newPos.x = rect.x - itemPreviewRef.current?.getBoundingClientRect().height;
      else newPos.x = rect.x + rect.width;
      if (rect.top <= 400) newPos.y = rect.top;
      else newPos.y = rect.top - 400 + rect.height;
      setPreviewPosition(newPos);
    };

  const handleMouseLeave = () => {
    setActiveItem(null);
    setPreviewPosition({ x: 0, y: 0 });
  };
  return (
    <div>
      {activeItem ? (
        <div ref={itemPreviewRef}>
        <ItemPreviewComponent
          item={activeItem}
          styles={{
            left: previewPosition.x,
            top: previewPosition.y,
            position: "fixed",
          }}
        />
        </div>
      ) : null}
      <div>
        <p>Start game items</p>
        {popularItems.start_game_items.map((item: IItem) => (
          <img
            onMouseEnter={handleMouseEnter(item)}
            onMouseLeave={handleMouseLeave}
            src={`https://cdn.akamai.steamstatic.com/${item.img}`}
            key={item.id}
          />
        ))}
      </div>
      <div>
        <p>Early game items</p>
        {popularItems.early_game_items.map((item: IItem) => (
          <img
            onMouseEnter={handleMouseEnter(item)}
            onMouseLeave={handleMouseLeave}
            src={`https://cdn.akamai.steamstatic.com/${item.img}`}
            key={item.id}
          />
        ))}
      </div>
      <div>
        <p>Mid game items</p>
        {popularItems.mid_game_items.map((item: IItem) => (
          <img
            onMouseEnter={handleMouseEnter(item)}
            onMouseLeave={handleMouseLeave}
            src={`https://cdn.akamai.steamstatic.com/${item.img}`}
            key={item.id}
          />
        ))}
      </div>
      <div>
        <p>Late game items</p>
        {popularItems.late_game_items.map((item: IItem) => (
          <img
            onMouseEnter={handleMouseEnter(item)}
            onMouseLeave={handleMouseLeave}
            src={`https://cdn.akamai.steamstatic.com/${item.img}`}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
};
