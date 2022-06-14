import React from 'react';

export const AppContext = React.createContext({
    gameState: null,
    setGameState: () => null,
    gameConfig: null,
    setGameConfig: () => null,
    generateRandomConfig: () => null,
    dotPos: null,
    setDotPos: () => null,
    levelResult: null,
    completeLevel: () => null,
    levelFailed: () => null,
    levelNumber: null,
});