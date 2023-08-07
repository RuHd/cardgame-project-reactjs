import React, { useState} from 'react'
import './styles/card.scss'
import flipSound from '../assets/SFX/sliding-card-sound.mp3'
import { generateAttackPts } from '../utils/functions'


const Card = ({cardName,animalImg,animalIcon,isPlayer,cardId,setCardEnemy,setCardPlayer}) => {
    const atk = generateAttackPts()
    const [attackPts, setattackPts] = useState(atk)
    const playFlipCardSound = () => {
        new Audio(flipSound).play()
    }

    const handleClick = () => {
        console.log("clicked")
        if (isPlayer) {
            setCardPlayer({cardId,attackPts})

        } else {
            setCardEnemy({cardId,attackPts})
        }

        
    }

    return (
        <div className= "card" onClick={() => handleClick()} onMouseEnter={() => playFlipCardSound()}>
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
