import { IAbility, IAbilityAttrib } from "../../types";
import "./ability-info.styles.css";

interface IAbilityInfoComponent {
  styles: React.CSSProperties | undefined;
  ability: IAbility;
  abilityVideoSrc?: string;
}

export const AbilityInfo: React.FC<IAbilityInfoComponent> = ({
  ability,
  abilityVideoSrc,
  styles,
}) => {
  return (
    <div className='abilityInfoContainer' style={styles}>
  
      <p className="abilityInfoName">
        <span>{ability.dname.toUpperCase()}</span>
      </p>
      {abilityVideoSrc ? (
        <video autoPlay loop muted playsInline className="abilityInfoVideo"  onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.style.display = "none"}}
          >
          <source src={abilityVideoSrc} type="video/mp4" />
        </video>
      ) : null}
      <hr className="abilityInfoHR" />
      <div className="abilityInfoBaseContainer">
        {ability.behavior ? (
          <p>
            TYPE:
            {Array.isArray(ability.behavior)
              ? ability.behavior.join("/").toLowerCase()
              : ability.behavior.toLowerCase()}
          </p>
        ) : null}
        {ability.bkbpierce && !Array.isArray(ability.bkbpierce) ? (
          <p>
            PIERCES SPELL IMMUNITY:
            <span
              className={ability.bkbpierce === "Yes" ? "bkbpierceYes" : ""}
            >{` ${ability.bkbpierce.toLowerCase()}`}</span>
          </p>
        ) : null}
        {ability.dmg_type && !Array.isArray(ability.dmg_type) ? (
          <p>
            DAMAGE:{" "}
            <span
              className={`abilityInfoDamageType_${ability.dmg_type.toLowerCase()}`}
            >
              {ability.dmg_type.toLowerCase()}
            </span>
          </p>
        ) : null}
        {ability.dispellable && !Array.isArray(ability.dispellable) ? (
          <p>
            DISPELLABLE:
            <span
              className={
                ability.dispellable === "Strong Dispels Only"
                  ? "dispellStrong"
                  : ""
              }
            >{` ${ability.dispellable.toLowerCase()}`}</span>
          </p>
        ) : null}
      </div>
      <hr className="abilityInfoHR" />
      <p className="abilityInfoDesc">{ability.desc}</p>
      {ability.attrib.some((item: IAbilityAttrib) => {
        return item.generated != true && item.value != "0";
      }) ? (
        <div className="abilityInfoAttrContainer">
          {ability.attrib.map((item: IAbilityAttrib) => {
            if (item.generated == true || item.value == "0") return;
            return (
              <p className="abilityInfoAttrText" key={item.key}>
                {item.header}{" "}
                {Array.isArray(item.value) ? item.value.join("/") : item.value}
              </p>
            );
          })}
        </div>
      ) : null}
      {ability.mc || ability.cd ? (
        <div className="abilityInfoSkillInfo">
          {ability.cd ? (
            <div className="abilityInfoCooldownContainer">
              <img
                className="abilityInfoCooldownImg"
                src="https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/icons/cooldown.png"
              />
              <p className="abilityInfoCooldownText">
                {Array.isArray(ability.cd) ? ability.cd.join("/") : ability.cd}
              </p>
            </div>
          ) : null}
          {ability.mc ? (
            <div className="abilityInfoCooldownContainer">
              <img
                className="abilityInfoCooldownImg"
                src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/tooltips/mana.png"
              />
              <p className="abilityInfoCooldownText">
                {Array.isArray(ability.mc) ? ability.mc.join("/") : ability.mc}
              </p>
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
};
