import React, { useState, useEffect } from 'react'
import Card from './Card'
import {generateCards} from '../utils/functions.js'
import { galleryGood, galleryEvil }  from '../utils/gallery' 
import './styles/board.scss'
import evilIcon from '../assets/evilAnimalIcon.png'
import goodIcon from '../assets/goodAnimalIcon.png'
import Score from './Score'


// Board receives opponent and player cards, also it shows the score
const Board = () => {
    const [enemyHand, setenemyHand] = useState(generateCards(galleryEvil).filter((cardImg,index) => {
        if (index <= 4) return cardImg
    }))
    const [playerHand, setplayerHand] = useState(generateCards(galleryGood).filter((cardImg,index) => {
        if(index <= 4) return cardImg
    }))
    const [reset, setReset] = useState(false)
    const [selectedCardPlayer, setselectedCardPlayer] = useState(null)
    const [selectedCardEnemy, setselectedCardEnemy] = useState(null)
    const [totalWins, settotalWins] = useState(0)
    const [totalLost, settotalLost] = useState(0)

    //Function to reset the game
    const resetGame = () => {
        setselectedCardPlayer(null)
        setselectedCardEnemy(null)
        settotalWins(0)
        settotalLost(0)
        setplayerHand(generateCards(galleryGood).filter((cardImg,index) => {
            if(index <= 4) return cardImg
        }))
        setenemyHand(generateCards(galleryEvil).filter((cardImg,index) => {
            if (index <= 4) return cardImg
        }))
    }
    // Function to create the battle system: If the player's card attack is greater, then it'll receives +1 totalWins on the state
 
    const handleDuel = () => {
        if((selectedCardEnemy !== null) && (selectedCardPlayer !== null) ) {
            if (selectedCardPlayer.attackPts > selectedCardEnemy.attackPts) {
                    settotalWins(() => totalWins + 1)                   
            } else {
                settotalLost(() => totalLost + 1) 
            }

            setplayerHand(playerHand.forEach((value,id) => {
                if (id !== selectedCardPlayer.cardId) {
                    return value
                }
            }))

            setenemyHand(enemyHand.forEach((value,id) => {
                if (id !== selectedCardEnemy.cardId) {
                    return value
                }
            }))

            setselectedCardPlayer(null)
            setselectedCardEnemy(null)

        } else if (playerHand.length == 0) { // Check if all cards were played
            if (totalWins > totalLost) {
                alert("Congratulation! You have cleansed the animal kingdom!")
            } else alert("You have lost! Try again!!!!")

            
        }

    }
   
    useEffect(() => {
      handleDuel()
    }, [selectedCardEnemy,selectedCardPlayer,reset])
    
    
    return (
        <div className='board' onLoad={() => handleDuel()}>
            <Score wins={totalWins} losses={totalLost}/>
            <button onClick={() => resetGame()}>
                Reset Game
            </button>
            <section className='enemySpot'>
                {enemyHand.map((cardImg,index) => {
                    return (
                        <Card key={index} animalImg={cardImg} cardName="Evil Animal" isPlayer = {false}  animalIcon={evilIcon} cardId = {index} setCardEnemy = {setselectedCardEnemy}/>
                    )
                })}
            </section>
            <section className='game-info'>
                <p>Select a card from your hand and choose an opponent's card to battle with</p>
            </section>
            <section className='playerHand'>
                {playerHand.map((cardImg,index) => {
                    return (
                        <Card key={index} animalImg={cardImg} cardName="Good Animal"  isPlayer = {true} animalIcon={goodIcon} cardId = {index} setCardPlayer = {setselectedCardPlayer}/>
                    )
                })}
            </section>
        </div>
    )
}

export default Board
