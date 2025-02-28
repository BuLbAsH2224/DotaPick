import "./defaultHeader.styles.css"
import { Link } from "react-router-dom"
import homeIcon from "../../assets/home.icon.png"
export const DefaultHeader = () => {
  return (
    <header className="defaultHeaderMain">
        <Link to="/"><img src={homeIcon} className="homeIcon" /></Link>
    </header>
  )
}
