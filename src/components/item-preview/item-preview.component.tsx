import { CSSProperties } from "react"
import { IItem } from "../../types"
import "./item-preview.styles.css"

interface IItemPreviewProps{
    item : IItem
    styles?: CSSProperties
}

export const ItemPreviewComponent : React.FC<IItemPreviewProps> = ({item,styles}) => {
    console.log(item)
    return (
        <div style={styles} className="itemPreviewDiv">
            <img src={`https://cdn.akamai.steamstatic.com/${item.img}`} alt="" />
            <p>{item.dname}</p>
            <p>{item.notes}</p>
            <p>{item.cost}</p>
        </div>
    )
}