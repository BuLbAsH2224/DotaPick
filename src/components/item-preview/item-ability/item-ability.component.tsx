import { IAbilitiesItem } from "../../../types";
import "./item-ability.styles.css";
interface IItemAbilityProps {
  abilityItem: IAbilitiesItem;
}

export const ItemAbilityComponent: React.FC<IItemAbilityProps> = ({
  abilityItem,
}) => {
  return (
    <div className={`itemAbilityDiv_${abilityItem.type}`}>
      <div className={`itemAbilityTypeNameDiv_${abilityItem.type}`}>
        <p
          key={abilityItem.title}
          className={`itemAbilityTypeName_${abilityItem.type}`}
        >
          {abilityItem.type[0].toUpperCase() + abilityItem.type.slice(1)}:{" "}
          {abilityItem.title}
        </p>
      </div>
      <div className={`itemAbilityDescDiv_${abilityItem.type}`}>
        <p className={`itemAbilityDesc_${abilityItem.type}`}>
          {abilityItem.description}
        </p>
      </div>
    </div>
  );
};
