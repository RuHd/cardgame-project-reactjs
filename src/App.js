import logo from './logo.svg';
import './App.css';
import Introscreen from './components/Introscreen';
import { useState } from 'react';
import Board from './components/Board';

function App() {
  const [startGame, setstartGame] = useState(false)
  return (
    <main className="App">
        {!startGame && <Introscreen startGameFunction = {setstartGame}/>}
        {startGame && <Board/>}
    </main>
  );
}

export default App;
