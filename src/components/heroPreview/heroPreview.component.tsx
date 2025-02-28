import React from 'react'
import { I_HeroStats } from '../../types'
import { steamLink } from '../../api'
import "./heroPreview.styles.css"
import { Link } from 'react-router-dom'

interface IheroPreviewProps{
    hero: I_HeroStats
}

export const HeroPreviewComponent : React.FC<IheroPreviewProps> = ({hero})=>{
  return (
    <Link to={`/singleHero/${hero.id}`}>
    <div className='heroPreviewDiv'>
    <img src={`${steamLink}${hero.img}`} className='heroPreviewImg'/>
    <p className='heroPreviewName'>{hero.localized_name}</p>
    </div>
    </Link>
  )
}
