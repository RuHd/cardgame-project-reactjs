import React, { useState, useMemo} from 'react'
import './styles/card.scss'
import flipSound from '../assets/SFX/sliding-card-sound.mp3'
import { generateAttackPts } from '../utils/functions'
import leafBorder from '../borderLeaft.svg'


const Card = ({cardName,animalImg,animalIcon,isPlayer,cardId,setCardEnemy,setCardPlayer, attackPts, selectedCardEnemy, selectedCardPlayer}) => {

    const playFlipCardSound = () => {
        new Audio(flipSound).play()
    }
    const handleClick = () => {
        if (isPlayer) {
            setCardPlayer({cardId: cardId, attackPts: attackPts})
            console.log(selectedCardPlayer)
        } else {
            setCardEnemy({cardId: cardId, attackPts: attackPts})
        }
    
         
    }

    return (
        <div className= {`${ (selectedCardPlayer.cardId == cardId || selectedCardEnemy.cardId == cardId) ? "clickedCard" : ""} card`} onClick={() => handleClick()} onMouseEnter={() => playFlipCardSound()}>
            <img src={leafBorder} className='leafBorder'/>
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
