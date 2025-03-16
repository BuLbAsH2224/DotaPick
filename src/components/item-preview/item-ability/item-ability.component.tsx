import { IAbilitiesItem } from "../../../types";
import "./item-ability.styles.css";
interface IItemAbilityProps {
  abilityItem: IAbilitiesItem;
}

export const ItemAbilityComponent: React.FC<IItemAbilityProps> = ({
  abilityItem,
}) => {
  return (
    <div>
      <p key={abilityItem.title}>
        {abilityItem.type}:{abilityItem.title}
      </p>
      <p>{abilityItem.description}</p>
    </div>
  );
};
