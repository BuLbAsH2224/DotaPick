import React, { useRef, useState } from "react";
import { IHeroStats } from "../../types";
import "./hero-roulette.styles.css";
import { getHeroImageUrlFromName } from "../../utils";

interface IHeroRouletteProps {
  heroes: IHeroStats[];
}

export const HeroRouletteComponent: React.FC<IHeroRouletteProps> = ({
  heroes,
}) => {
  const rouletteEventes: { interval: number | null; timeout: number | null } = {
    interval: null,
    timeout: null,
  };
  const [isActive, setIsActive] = useState<boolean>(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const onHandleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    if (isActive || rouletteEventes.timeout || rouletteEventes.interval) return;
    setIsActive(true);
    rouletteEventes.interval = setInterval(() => {
      if (isActive) return;

      if (!imgRef.current) return;
      const randHero: IHeroStats =
        heroes[Math.floor(Math.random() * heroes.length)];
      imgRef.current.src = getHeroImageUrlFromName(randHero.name);
    }, 100);

    rouletteEventes.timeout = setTimeout(() => {
      if (!imgRef.current || !rouletteEventes.interval) return;
      clearInterval(rouletteEventes.interval);
      const randHero: IHeroStats =
        heroes[Math.floor(Math.random() * heroes.length)];
      imgRef.current.src = getHeroImageUrlFromName(randHero.name);
      setIsActive(false);
    }, 2000);
  };
  return (
    <div>
      <img
        ref={imgRef}
        src={getHeroImageUrlFromName(heroes[0].name)}
        alt="roulette hero"
      />
      <button onClick={onHandleClick} disabled={isActive}>
        {isActive ? "Крутится..." : "Прокрутить"}
      </button>
    </div>
  );
};
