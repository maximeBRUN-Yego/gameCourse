import React, { useEffect, useContext } from "react"
import { GameState } from "../constants"
import {AppContext} from '../context';
export default function Dot(props) {
    const context = useContext(AppContext);

    useEffect(() => {
        let interval;
        if(context.gameState === GameState.ONGOING) {
            interval = setInterval(() => {
                context.setDotPos((dotPos) => dotPos + context.gameConfig.speed/60);
            }, 1000/60);
        } else if (context.gameState === GameState.NOTSTARTED) {
            context.setDotPos(0);
        }
        return () => {
            if(interval) {clearInterval(interval);}
            
        };
    }, [context.gameState, context.gameConfig.speed])

    return (
        <div className="dot" style={{left: context.dotPos}}>
        </div>
    )
}
