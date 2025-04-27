import "./default-header.styles.css"
import { Link } from "react-router-dom"
import homeIcon from "../../assets/home.icon.png"
import React from "react"
export const DefaultHeader : React.FC = () => {
  return (
    <nav className="defaultHeaderMain">
        <Link to="/" className="linkToHome"><img src={homeIcon} className="homeIcon" /></Link>
        <Link className='headerLinkToRoulette' to="/heroRoulette">Рулетка героев</Link>
    </nav>
  )
}
