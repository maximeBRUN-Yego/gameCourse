import React,  { useContext }from "react";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import './style.css'
import { GameState } from "./constants";
import {AppContext} from './context';

function App() {
  const context = useContext(AppContext);
  
  const handleGameStateChange = (newGameState) => {
    if (newGameState === GameState.NOTSTARTED && context.levelResult === true) {
      context.generateRandomConfig();
      context.levelNotCompleted();
    }
    context.setGameState(newGameState);
  };

  return (
    <div className="App">
      <Header />
      <Body />
      <Footer onGameStateChange={handleGameStateChange} />
    </div>
  );
}

export default App;
