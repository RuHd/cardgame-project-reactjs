import React, { useState, useEffect } from 'react'
import Card from './Card'
import {generateAttackPts, generateCards} from '../utils/functions.js'
import { galleryGood, galleryEvil }  from '../utils/gallery' 
import './styles/board.scss'
import evilIcon from '../assets/evilAnimalIcon.png'
import goodIcon from '../assets/goodAnimalIcon.png'
import Score from './Score'
import boardSong from '../assets/Songs/boardSong.mp3'


//TODO

// 1- Shuffle both gallery images
// 2- create obj for each image with src and unique ID
// 3- store in a state

// Board receives opponent and player cards, also it shows the score
const Board = () => {
    const [enemyHand, setenemyHand] = useState([])
    const [playerHand, setplayerHand] = useState([])
    const [reset, setReset] = useState(false)
    const [selectedCardPlayer, setselectedCardPlayer] = useState({cardId: 0, attackPts: 0})
    const [selectedCardEnemy, setselectedCardEnemy] = useState({cardId: 0, attackPts: 0})
    const [totalWins, settotalWins] = useState(0)
    const [totalLost, settotalLost] = useState(0)
    const [cardClicked, setcardClicked] = useState(false)


    //Function to create random cards for each oponent
    const shufflePlayersHand = () => {
        const imgEvil = generateCards(galleryEvil).filter((cardImg,index) => {
            if (index <= 4) return cardImg
        })

        const imgGood = generateCards(galleryGood).filter((cardImg,index) => {
            if(index <= 4) return cardImg
        })

        setenemyHand(imgEvil.map((img) => {
            return {src: img, id: Math.random(),attackPts: generateAttackPts()}
        }))

        setplayerHand(imgGood.map((img) => {
            return {src: img, id: Math.random(),attackPts: generateAttackPts()}
        }))
    }

    //Function to reset the game
    const resetGame = () => setReset(!reset)

   
    
    // Function to create the battle system: If the player's card attack is greater, then it'll receives +1 totalWins on the state
    const handleDuel = () => {
        if((selectedCardEnemy.cardId !== 0) && (selectedCardPlayer.cardId !== 0) ) {

            if (selectedCardPlayer.attackPts > selectedCardEnemy.attackPts) {
                    settotalWins(() => totalWins + 1)                   
            } else {
                settotalLost(() => totalLost + 1) 
            }

            setplayerHand(playerHand.map((card) => {
                if (card.id == selectedCardPlayer.cardId) {
                    return undefined
                } else return card
            }).filter(card => {
                if (card !== undefined) return card
            }))

            setenemyHand(enemyHand.map((card) => {
                if (card.id !== selectedCardEnemy.cardId) {
                    if (card.id == selectedCardEnemy.cardId) {
                        return undefined
                    } else return card     
                }
            }).filter(card => {
                if (card !== undefined) return card
            }))

            setselectedCardPlayer({cardId: 0, attackPts: 0})
            setselectedCardEnemy({cardId: 0, attackPts: 0})
            setcardClicked(false)

        } else {
            alert("Select your card and an enemy card to battle!") // If both cards are not selected
        }

        console.log(totalWins,totalLost)
    }
   
    useEffect(() => {
        shufflePlayersHand()
        settotalLost(0)
        settotalWins(0)
        

        // new Audio(boardSong).play()
    }, [reset])
    
    return (
        <div className='board' >
            <Score wins={totalWins} losses={totalLost}/>
            <section className='btn-options'>
                <button onClick={() => resetGame()}>
                    Reset Game
                </button>
                <button onClick={() => handleDuel()}>
                    Start Battle
                </button>
            </section>
    
            <section className='enemySpot'>
                {enemyHand.map((obj,index) => {
                    if (obj !== undefined)
                    return (
                        <Card key={index} animalImg={obj.src} cardName="Evil Animal" cardId={obj.id} isPlayer = {false}  animalIcon={evilIcon} setCardEnemy = {setselectedCardEnemy} clicked={false} attackPts={obj.attackPts} selectedCardEnemy = {selectedCardEnemy} selectedCardPlayer = {selectedCardPlayer}/>
                    )
                })}
            </section>
            <section className='game-info'>
                <p>Select a card from your hand and choose an opponent's card to battle with</p>
            </section>
            <section className='playerHand'>
                {playerHand.map((obj,index) => {
                    if (obj !== undefined)
                    return (
                        <Card key={index} animalImg={obj.src} cardName="Good Animal" cardId={obj.id}  isPlayer = {true} animalIcon={goodIcon} setCardPlayer = {setselectedCardPlayer} clicked={cardClicked} setclicked = {setcardClicked} attackPts={obj.attackPts} selectedCardPlayer = {selectedCardPlayer} selectedCardEnemy = {selectedCardEnemy}/>
                    )
                })}
            </section>
        </div>
    )
}

export default Board
