import React, { useState } from 'react'
import './styles/card.scss'

import flipCardSound from '../assets/SFX/flipcard-91468.mp3'

const Card = ({cardName,animalImg,attackPts,animalIcon, isPlayer}) => {
    const [isDestroyed, setisDestroyed] = useState(false)

    return (
        <div className= "card" onLoad={}>
            <audio src={flipCardSound} autoPlay ></audio>
            <img src={animalIcon} className='icon'/>
            <h2>{cardName}</h2>
            <img src={animalImg}/>
            <section className='attack'>
                <span>Atk</span>
                <span>{attackPts}</span>
            </section>
        </div>
    )
}

export default Card
