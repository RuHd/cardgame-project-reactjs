import logo from './logo.svg';
import './App.css';
import Introscreen from './components/Introscreen';
import { useEffect, useState } from 'react';
import Board from './components/Board';
import mainSong from './assets/Songs/genesis-cinematic-ambience-background-music-125205.mp3'

function App() {
  const [startGame, setstartGame] = useState(false)

  useEffect(() => {
    new Audio(mainSong).play()
  
    
  }, [])
  
  return (
    <main className="App">
        {!startGame && <Introscreen startGameFunction = {setstartGame}/>}
        {startGame && <Board/>}
    </main>
  );
}

export default App;
