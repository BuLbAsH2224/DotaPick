import { IAttribItem, IItem } from "../../../types";
import "./item-base-info.styles.css";
import { ItemAttributesComponent } from "../item-attribut";
interface IItemBaseInfoProps {
  item: IItem;
}

export const ItemBaseInfoComponent: React.FC<IItemBaseInfoProps> = ({
  item,
}) => {

  return (
    <div>
        <div className="itemBaseInfo">
      {item.behavior ? (
        <p className="itemPreviewTargetText">
          TARGET:
          <span className="itemPreviewTargets">
            {Array.isArray(item.behavior)
              ? [...item.behavior].join("/")
              : item.behavior}
          </span>
        </p>
      ) : null}
      {item.dispellable ? (
        <p className="itemPreviewDispellableText">
          DISPELLABLE: <span className="itemPreviewDispellableInfo">{item.dispellable}</span>
        </p>
      ) : null}
      </div>
      <hr  className="itemBaseInfoAndAttrHR" />
      {item.attrib && item.attrib.some(item => "display" in item)? (
        <div className="itemAttrDiv">
          {item.attrib.map((thisItem: IAttribItem) => (
            <ItemAttributesComponent attribItem={thisItem} key={thisItem.key} />
          ))}
        </div>
      ) : null}
    </div>
  );
};
