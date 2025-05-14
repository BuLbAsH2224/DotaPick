import { IAspect } from "../../../../types";
import "./aspect.styles.css";

interface IAspectComponentProps {
  aspect: IAspect;
}

const getGradient = (color: string): string => {
  switch (color.toLowerCase()) {
    case "green":
      return "linear-gradient(to right, #A2B23E, #2D5A18)";
    case "red":
      return "linear-gradient(to right, #9F3C3C, #4A2040)";
    case "purple":
      return "linear-gradient(to right, #9C70A4, #282752)";
    case "blue":
      return "linear-gradient(to right, #547EA6, #2A385E)";
    case "yellow":
      return "linear-gradient(to right, #C8A45C, #6F3D21)";
    case "gray":
      return "linear-gradient(to right, #565C61, #1B1B21)";
    default:
      return "";
  }
};

export const AspectComponent: React.FC<IAspectComponentProps> = ({
  aspect,
}) => {
  return (
    <div className="aspectContainer">
      <div
        className="aspectIconAndTitleContainerParent"
        style={{
          background: getGradient(aspect.color),
        }}
      >
        <img
          src="https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/icons/facets/ripple_texture.png"
          className="aspectGradientImg"
        />

        <div className="aspectIconAndTitleContainer">
          <img src={aspect.img} className="aspectIcon" />
          <p className="aspectTitle">{aspect.title}</p>
        </div>
      </div>
      <p className="aspectDescText">{aspect.description}</p>
    </div>
  );
};
