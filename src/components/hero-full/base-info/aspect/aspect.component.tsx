import { IAspect } from "../../../../types";
import "./aspect.styles.css";

interface IAspectComponentProps {
  aspect: IAspect;
}

export const AspectComponent: React.FC<IAspectComponentProps> = ({
  aspect,
}) => {
  return (
    <div className="aspectContainer">
      <div className="aspectIconAndTitle">
        <div className="aspectTitleBackground2"></div>
        <div
          className="aspectTitleBackground"
          style={{
            background: "linear-gradient(to right, #9C70A4, #282752)",
          }}
        ></div>

        <div className="aspectIconAndTitleContainer">
          <img src={aspect.img} className="aspectIcon" />
          <p>{aspect.title}</p>
        </div>
      </div>
      <p>{aspect.description}</p>
    </div>
  );
};
