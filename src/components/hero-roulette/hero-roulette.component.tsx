import React, { useState } from "react";
import { HeroPreviews, IHeroPreview } from "../../types";
import "./hero-roulette.styles.css";
import "react-roulette-pro/dist/index.css";
import RoulettePro from "react-roulette-pro";

import { Link } from "react-router-dom";

interface IHeroRouletteProps {
  heroes: HeroPreviews;
}

export const HeroRouletteComponent: React.FC<IHeroRouletteProps> = ({
  heroes,
}) => {
  const heroPrizes = [
    ...heroes.map((item: IHeroPreview) => {
      return {
        id: item.hero_id,
        image: item.img,
        text: item.localized_name,
      };
    }),
  ];
  const [start, setStart] = useState(false);

  const jackpotSound = new Audio("jackpot-sound.mp3");
  const [prizeIndex, setPrizeIndex] = useState<number>(0);

  const handleStart = () => {
    setPrizeIndex(Math.floor(Math.random() * heroes.length));
    setStart(true);
  };

  const handlePrizeDefined = () => {
    if (heroes[prizeIndex].localized_name.toLowerCase() === "pudge")
      jackpotSound.play();
    setRenderPreview(true);
  };
  const [renderPreview, setRenderPreview] = useState<boolean>(false);
  const handleOnClickClose: React.MouseEventHandler<HTMLButtonElement> = () => {
    setRenderPreview(false);
    setStart(false);
  };
  return (
    <>
      <div
        className={`rouletteHeroPreview ${
          !renderPreview
            ? "rouletteHeroPreviewHidden"
            : "rouletteHeroPreviewVisible"
        }`}
      >
        <Link to={`/singleHero/${heroes[prizeIndex].id}`}>
          <img src={`${heroes[prizeIndex].img}`} alt="hero img" />
        </Link>
        <button onClick={handleOnClickClose}>Закрыть</button>
      </div>
      <RoulettePro
        prizes={[...heroPrizes, ...heroPrizes.slice(heroPrizes.length - 20)]}
        prizeIndex={prizeIndex}
        start={start}
        options={{ stopInCenter: true }}
        defaultDesignOptions={{ prizesWithText: true }}
        soundWhileSpinning="roulette-spin.mp3"
        spinningTime={2}
        onPrizeDefined={handlePrizeDefined}
      />
      <button onClick={handleStart} disabled={start}>
        {start ? "Крутится..." : "Крутить"}
      </button>
    </>
  );
};
