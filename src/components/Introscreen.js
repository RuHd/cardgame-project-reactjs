import React from 'react'
import gameIcon from '../assets/gameIcon.png'
import './styles/introscreen.scss'
import song from '../assets/Songs/genesis-cinematic-ambience-background-music-125205.mp3'


const Introscreen = ({startGameFunction}) => {
    return (
        <div className="intro--screen">
            <audio src={song} loop autoPlay>
                Song not supported on this browser
            </audio>
            <h1>Corruption Animal Purge</h1>
            <img src={gameIcon} alt="Game icon"/>
            <button onClick = {() => startGameFunction(true)}> Click Here to Start the Game</button>
            <footer>
                Made by Ruan Mesquita
            </footer>
        </div>
    )
}

export default Introscreen
