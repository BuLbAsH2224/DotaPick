import { useEffect, useState } from "react";
import { IAbilityFromApi, IAbility } from "../../../../types";
import "./abilities.styles.css";
import { AbilityPreviewComponent } from "./ability-preview";

interface IAbilitiesProps {
  abilitiesAllInfo: IAbilityFromApi;
}

export const AbilitiesComponent: React.FC<IAbilitiesProps> = ({
  abilitiesAllInfo,
}) => {
  const [heroInnateCm, setHeroInnateCm] = useState<IAbility | undefined>(
    undefined
  );

  useEffect(() => {
    if (!abilitiesAllInfo) return;

    setHeroInnateCm(
      abilitiesAllInfo.abilities.find((item: IAbility) => item.is_innate)
    );
  }, [abilitiesAllInfo]);
  return (
    <>
      <div className="heroAbilitiesContainer">
        {heroInnateCm ? (
          <AbilityPreviewComponent
            ability={heroInnateCm}
            aghsAndShard={abilitiesAllInfo.aghsAndShard}
          />
        ) : null}
        {abilitiesAllInfo.abilities.map((item: IAbility, ind) => {
          if (item.desc && !item.is_innate)
            return (
              <AbilityPreviewComponent
                aghsAndShard={abilitiesAllInfo.aghsAndShard}
                ability={item}
                key={ind}
              />
            );
        })}
        {abilitiesAllInfo.aghsAndShard.has_shard &&
        !abilitiesAllInfo.aghsAndShard.shard_new_skill ? (
          <AbilityPreviewComponent
            aghsAndShard={abilitiesAllInfo.aghsAndShard}
            ability={{
              dname: abilitiesAllInfo.aghsAndShard.shard_skill_name,
              behavior: "",
              attrib: [],
              desc: abilitiesAllInfo.aghsAndShard.shard_desc,
              img: abilitiesAllInfo.aghsAndShard.shard_imgSRC,
              target_team: [],
              target_type: [],
              videoSRC: abilitiesAllInfo.aghsAndShard.shard_videoSRC,
              is_shard: true,
            }}
          />
        ) : null}
        {abilitiesAllInfo.aghsAndShard.has_scepter &&
        !abilitiesAllInfo.aghsAndShard.scepter_new_skill ? (
          <AbilityPreviewComponent
            aghsAndShard={abilitiesAllInfo.aghsAndShard}
            ability={{
              dname: abilitiesAllInfo.aghsAndShard.scepter_skill_name,
              behavior: "",
              attrib: [],
              desc: abilitiesAllInfo.aghsAndShard.scepter_desc,
              img: abilitiesAllInfo.aghsAndShard.scepter_imgSRC,
              target_team: [],
              target_type: [],
              videoSRC: abilitiesAllInfo.aghsAndShard.scepter_videoSRC,
              is_aghs: true,
            }}
          />
        ) : null}
      </div>
    </>
  );
};
