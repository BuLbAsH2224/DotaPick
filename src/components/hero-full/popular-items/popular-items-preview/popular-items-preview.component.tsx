import React, { useEffect, useRef, useState } from "react";
import "./popular-items-preview.styles.css";
import { IItem } from "../../../../types";
import { ItemPreviewComponent } from "../../../item-preview";

interface IPopularItemsPreviewProps {
  item: IItem;
}

export const PopularItemsPreviewComponent: React.FC<
  IPopularItemsPreviewProps
> = ({ item }) => {
  const [displayItemInfo, setDisplayItemInfo] = useState<boolean>(false);
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const itemPreviewRef = useRef<HTMLDivElement>(null);
  const handleMouseEnter = (e: React.MouseEvent<HTMLImageElement>) => {
    if (!itemPreviewRef.current) return;
    const newComponentPos = { x: 0, y: 0 };
    const imageEl = e.target as HTMLImageElement;
    const itemPreviewBounds = itemPreviewRef.current.getBoundingClientRect();
    const imgRect = imageEl.getBoundingClientRect();
   
    if (imgRect.left >= itemPreviewBounds.width) {
      newComponentPos.x = imgRect.left - itemPreviewBounds.width;
    } else {
      newComponentPos.x = imgRect.right;
    }

    if (window.innerHeight - imgRect.bottom >= itemPreviewBounds.height) {
      newComponentPos.y = imgRect.top;
    } else {
      newComponentPos.y = imgRect.bottom - itemPreviewBounds.height;
    }
    setDisplayItemInfo(true);
    setPosition(newComponentPos);
  };
  useEffect(() => {
    const handleWindowScroll = () => {
      setDisplayItemInfo(false);
    };

    window.addEventListener("scroll", handleWindowScroll);

    return () => {
      window.removeEventListener("scroll", handleWindowScroll);
    };
  }, []);
  const handleMouseLeave = () => {
    setDisplayItemInfo(false);
  };
  return (
    <div style={{ position: "relative" }}>
      <img
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="popularItemPreviewImage"
        src={`https://cdn.akamai.steamstatic.com/${item.img}`}
      />

      <ItemPreviewComponent
        ref={itemPreviewRef}
        item={item}
        styles={{
          position: "fixed",
          visibility: displayItemInfo ? "visible" : "hidden",
          zIndex: 99,
          left: position.x,
          top: position.y,
        }}
      />
    </div>
  );
};
