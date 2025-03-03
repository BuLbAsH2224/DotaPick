import "./default-header.styles.css"
import { Link } from "react-router-dom"
import homeIcon from "../../assets/home.icon.png"
import React from "react"
export const DefaultHeader : React.FC = () => {
  return (
    <header className="defaultHeaderMain">
        <Link to="/"><img src={homeIcon} className="homeIcon" /></Link>
    </header>
  )
}
