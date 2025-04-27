import { useEffect, useState } from "react";
import {
  IAbilityFromApi,
  IAbility,

} from "../../../../types";
import "./abilities.styles.css";
import { AbilityPreviewComponent } from "./ability-preview";
import { Loader } from "../../../loader";

interface IAbilitiesProps {
  abilitiesAllInfo: IAbilityFromApi;
}

export const AbilitiesComponent: React.FC<IAbilitiesProps> = ({
  abilitiesAllInfo,
}) => {
  const [heroInnateCm, setHeroInnateCm] = useState<IAbility | undefined>(undefined);

  useEffect(() => {
    if (!abilitiesAllInfo) return;
    console.log(abilitiesAllInfo)
    setHeroInnateCm(
      abilitiesAllInfo.abilities.find((item: IAbility) => item.is_innate)
    );
  }, [abilitiesAllInfo]);
  return (
    <>
      <div className="heroAbilitiesContainer">
        {heroInnateCm ? (
          <AbilityPreviewComponent ability={heroInnateCm} />
        ) : null}
        {abilitiesAllInfo.abilities ? (
          abilitiesAllInfo.abilities.map((item: IAbility, ind) => {
            if (item.desc && !item.is_innate)
              return <AbilityPreviewComponent ability={item} key={ind} />;
          })
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
};
