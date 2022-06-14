import React, { useState } from 'react';
import {AppContext} from './context';
import { GameState } from './constants';

export const AppProvider = (props) => {
    const [gameState, setGameState] = useState(GameState.NOTSTARTED);
    const [gameConfig, setGameConfig] = useState({
        squareLength: 500,
        speed: 300,
        victoryRange:100,
      });
    const [dotPos, setDotPos] = useState(0);
    const [levelResult, setLevelResult] = useState(false);
    const [levelNumber, setLevelNumber] = useState(1);

    const generateRandomConfig = () => {
      console.log(levelNumber, gameConfig.speed);
        setGameConfig({
            squareLength: Math.round((Math.random() * 500) + 250),
            speed: Math.round((Math.random() * 30) + 300) + (100 * (levelNumber-1)),
            victoryRange: gameConfig.victoryRange-10,
          });
    };

    const completeLevel = () => {
      setLevelResult(true);
      setLevelNumber(levelNumber => levelNumber + 1);
    };

    const levelNotCompleted = () => {
      setLevelResult(false);
    };
      
    const appContext = {
        gameState,
        setGameState,
        gameConfig,
        setGameConfig,
        generateRandomConfig,
        dotPos,
        setDotPos,
        levelResult,
        completeLevel,
        levelNotCompleted,
        levelNumber,
    }

    return (
        <AppContext.Provider value={appContext}>
            {props.children}
        </AppContext.Provider>
    );
}

