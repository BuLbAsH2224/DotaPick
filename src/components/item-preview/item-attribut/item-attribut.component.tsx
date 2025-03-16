import { IAttribItem } from "../../../types"
import "./item-attribut.styles.css"
interface IItemAttributesProps{
    attribItem : IAttribItem
}

export const ItemAttributesComponent : React.FC<IItemAttributesProps> = ({attribItem}) => {
    return (
        attribItem.display ? 
        <p key={attribItem.key}>
            {attribItem.display.replace("{value}", attribItem.value)}
        </p> : null
    )
}