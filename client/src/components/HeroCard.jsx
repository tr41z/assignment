import React from 'react'
import { UserIcon } from 'lucide-react'

const HeroCard = ({ hero }) => {
  return (
    <div className='hero-card'>
        <UserIcon size={60}/>
        <p>{hero.name}</p>
        <p>{hero.superpower}</p>
        <p>{hero.humility_score}</p>
    </div>
  )
}

export default HeroCard